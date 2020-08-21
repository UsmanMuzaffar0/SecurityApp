import React, { Component } from 'react';
import homeStyle from './homeStyle';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';


export default class HomeScreen extends Component {
    render(){
      return(
        <View style={homeStyle.container}>
        <View style={homeStyle.row}>
            <View style={homeStyle.widgets}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Communication')}>
                <Text style={homeStyle.text} > Communication </Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyle.widgets}>
              <Text style={homeStyle.text}> Groups </Text>
            </View>
        </View>

        <View style={homeStyle.row}>
            <View style={homeStyle.widgets}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Settings')}>
                <Text style={homeStyle.text}> Settings </Text>
              </TouchableOpacity>  
            </View>
            <View style={homeStyle.widgets}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TrackSecurity')}>
                <Text style={homeStyle.text}> Track Security Personnel </Text>
              </TouchableOpacity>
            </View>
        </View>

        <View style={homeStyle.row}>
            <View style={homeStyle.widgets}>
              <Text style={homeStyle.text}> Records </Text>
            </View>
            <View style={homeStyle.widgets}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ComplaintAndSuggestion')}>
                <Text style={homeStyle.text}> Complaint and suggestion </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
    }
}

