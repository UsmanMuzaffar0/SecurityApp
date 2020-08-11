import React, { Component } from 'react';
import styles from './style';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class SHome extends Component {
  render(){      
    return(
          
        <View style={styles.container}>
          <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Contact')}>
                  <Text style={styles.text} > Contacts </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignalBlink')}>
                  <Text style={styles.text}> Signal Blink </Text>
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
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('MatchCode')}>
                  <Text style={styles.text}> Match Code </Text>
                </TouchableOpacity>
              </View>
           </View> 
        </View>
        );
      }
    }
    
    
    



