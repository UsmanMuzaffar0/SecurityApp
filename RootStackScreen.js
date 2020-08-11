import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Keyboard,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';



const Stack = createStackNavigator();

export default class RootStackScreen extends Component {

  

    render(){
        return (
   
        <Stack.Navigator >
            <Stack.Screen name="SignIn" component={Login} options={{ headerShown:false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown:false }} />
        </Stack.Navigator>

    
        );
      }
}
