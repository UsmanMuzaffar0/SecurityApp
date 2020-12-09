import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker,Callout, Polygon, Circle }
  from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Carousel from 'react-native-snap-carousel';

export default class TrackSecurity extends Component {

  state={
    focusedLocation:{
      latitude: 31.528239,
      longitude: 74.322353,
      latitudeDelta: 0.0122,
      longitudeDelta: 
      Dimensions.get("window").width / 
      Dimensions.get("window").height * 0.0122
    },
    coordinates: [
      { name: 'Security 1', latitude: 31.527882, longitude: 74.31765, image: require('../../../images/security.png') },
      { name: 'Security 2', latitude: 31.52929, longitude: 74.314504, image: require('../../../images/security.png') },
      { name: 'Security 3', latitude: 31.52715, longitude: 74.311371, image: require('../../../images/security.png') },
      { name: 'Security 4', latitude: 31.524333, longitude: 74.313581, image: require('../../../images/security.png') },
      { name: 'Security 5', latitude: 31.524582, longitude: 74.316973, image: require('../../../images/security.png') },
    ],
    markers: [],
    locationChoosen: false

  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return{
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude,
          
        },
        locationChoosen: true
      };
    });
  };

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    });

    this._carousel.snapToItem(index);
  }

  getLocationHandler = () => {
    Geolocation.getCurrentPosition(pos => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.pickLocationHandler(coordsEvent);
    }, err => {
      console.log(err);
      alert("Fetching the position failed, Please pick one manually!");
    })
  }

  showWelcomeMessage = () =>
  Alert.alert(
    'Resident Location',
    'Integrated Residential Security Home',
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Ok'
      }
    ]
  )

  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.025
    })

    this.state.markers[index].showCallout()
  }

  renderCarouselItem = ({ item }) =>
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>

  render() {
    let marker = null;

    if (this.state.locationChoosen){
      marker = <Marker coordinate={this.state.focusedLocation} >
        <Callout onPress={this.showWelcomeMessage}>
          <Image source={require('../../../images/home.png')}/>
          <Text>I'm here</Text>
        </Callout>
      </Marker>;
    }
    return (
      <View style={styles.container}>
        <MapView 
        initialRegion={this.state.focusedLocation}
        style={styles.map}
        onPress={this.pickLocationHandler}
        ref={ref => this.map= ref}
        //ref={map => this._map = map}
        >
        <Polygon 
          coordinates={this.state.coordinates}
          fillColor={'rgba(100,100,200,0.3)'}
          strokeWidth={3}
        />
        {marker}
        {
            this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                ref={ref => this.state.markers[index] = ref}
                onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >
                <Callout>
                  <Text>{marker.name}</Text>
                </Callout>

              </Marker>
            ))
          }
        </MapView>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={this.renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => this.onCarouselItemChange(index)}
        />
        <TouchableOpacity style={styles.button} onPress={this.getLocationHandler}>
          <Text style={styles.txt} >Locate Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  button: {
    backgroundColor:'#607d8b',
        borderRadius: 25,
        opacity:0.9,
        width:100,
        paddingVertical:12,
        marginTop:30,
        alignSelf:'center',
        marginLeft:"65%"
  },
  txt: {
    fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',   
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
 
});