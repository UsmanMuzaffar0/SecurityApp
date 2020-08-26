import React, { Component } from 'react';
import homeStyle from './homeStyle';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';


export default class HomeScreen extends Component {
    render(){
      return(
        <ImageBackground 
                source={require('../../../images/home-background.jpg')}
                style={homeStyle.mainBack}>
        <View style={homeStyle.container}>
        <View style={homeStyle.row}>
            <View style={homeStyle.widgets}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Communication')}>
                <Text style={homeStyle.text} > Communication </Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyle.widgets}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GroupChat')}>
                <Text style={homeStyle.text} > Group </Text>
              </TouchableOpacity>
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
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Records')}>
                <Text style={homeStyle.text}> Records </Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyle.widgets}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('ComplaintAndSuggestion')}>
                <Text style={homeStyle.text}> Complaint and suggestion </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </ImageBackground>
    );
    }
}

