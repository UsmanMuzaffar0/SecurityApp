import React, { Component } from 'react';
import styles from './styles';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class RHome extends Component {
  render(){      
    return(
          
        <View style={styles.container}>
          <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Communication')}>
                  <Text style={styles.text} > Communication </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('EmergencySignals')}>
                  <Text style={styles.text}> Emergency Signal </Text>
                </TouchableOpacity>
              </View> 
          </View>
  
         <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Settings')}>
                  <Text style={styles.text}> Settings </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('TrackSecurity')}>
                  <Text style={styles.text}> Track Security </Text>
                </TouchableOpacity>
              </View>
           </View> 
  
          <View style={styles.row}>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Helps')}>
                  <Text style={styles.text}> Help </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.widgets}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('ComplaintAndSuggestion')}>
                  <Text style={styles.text}> Complaint and suggestion </Text>
                </TouchableOpacity>
              </View>
           </View> 
        </View>
        );
      }
    }
    
    
    



