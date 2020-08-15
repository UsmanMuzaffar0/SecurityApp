import React, { Component} from 'react';
import {
 
  StyleSheet,
  Text,
  Image,
  Alert,
 
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle} from 'react-native-maps';



export default class TrackSecurtity extends Component  {
  state={
    coordinates: [
      { name: '1', latitude: 37.8025259, longitude: -122.4351431 },
      { name: '2', latitude: 37.7896386, longitude: -122.421646  },
      { name: '3', latitude: 37.7665248, longitude: -122.4161628 },
      { name: '4', latitude: 37.7734153, longitude: -122.4577787 },
      { name: '5', latitude: 37.7948605, longitude: -122.4596065 },
      { name: '6', latitude: 37.8025259, longitude: -122.4351431 }
      
    ]
  }

  showWelcomeMessage = () => {
    Alert.alert(
      'Welcome to Lahore Lahore e',
      'Food is love',
      [
        {
          text: 'Cancel',
          style: ' cancel'
        },
        {
          text: 'Ok'
        }
      ]
    )
  }

  render(){
  return (
    <MapView
    provider = {PROVIDER_GOOGLE}
    style={styles.map}
    region = {{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    }}>
      <Polygon
      coordinates={this.state.coordinates}
      fillColor={'rgba(100,100,200,0.2)'}
      strokeWidth={3}>
      
      </Polygon>
      <Circle
        center={{latitude: 37.8025259, longitude: -122.4351431}}
        radius={1000}
        fillColor={'rgba(200,300,200,0.3)'}
      />
      <Marker 
      draggable
      coordinate ={{latitude: 37.7825259, longitude: -122.4351431}}>

        <Callout onPress={this.showWelcomeMessage}>
          
          <Image source={require('../../../images/sushi.png')} />
          <Text>Lahore Lahore e</Text>
          
        </Callout>

      </Marker>
      {
        this.state.coordinates.map(marker => (
          <Marker
          key={marker.name}
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          title={marker.name}>

            <Callout onPress={this.showWelcomeMessage}>
          
              <Image style={{width:50,height:50}} source={require('../../../images/sushi.png')} />
              <Text>{marker.name}</Text>
          
            </Callout>
          </Marker>
        ))
      }
    </MapView>
  );
}
}

const styles= StyleSheet.create({
  map:{
    height: '100%'
  }
})