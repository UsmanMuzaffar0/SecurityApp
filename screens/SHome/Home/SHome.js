import React, { Component } from 'react';
import styles from './style';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


export default class SHome extends Component {
  render(){      
    return(
      <ImageBackground 
      source={require('../../../images/home-background.jpg')}
      style={styles.mainBack}>
        <View style={styles.container}>
          <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Communication')}>
                  <Text style={styles.text} > Communication </Text>
                </TouchableOpacity>
              </View>
          </View> 
  
          <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Settings')}>
                  <Text style={styles.text}> Settings </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('TrackResident')}>
                  <Text style={styles.text}> Track Resident </Text>
                </TouchableOpacity>
              </View>
           </View> 
  
          <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Help')}>
                  <Text style={styles.text}> Help </Text>
                </TouchableOpacity>
              </View>
           </View> 
        </View>
        </ImageBackground>
        );
      }
    }
    
    
    



