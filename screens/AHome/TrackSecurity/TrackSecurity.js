import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import MapView,
{ PROVIDER_GOOGLE, Marker,Callout, Polygon, Circle }
  from 'react-native-maps';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';


export default class TrackSecurity extends Component {

  state={
    focusedLocation:{
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: 
      Dimensions.get("window").width / 
      Dimensions.get("window").height * 0.0122
    },
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

  render() {
    let marker = null;

    if (this.state.locationChoosen){
      marker = <Marker coordinate={this.state.focusedLocation}/>;
    }
    return (
      <View style={styles.container}>
        <MapView 
        initialRegion={this.state.focusedLocation}
        style={styles.map}
        onPress={this.pickLocationHandler}
        ref={ref => this.map= ref}
        >
        
        {marker}
        </MapView>
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
  }
 
});