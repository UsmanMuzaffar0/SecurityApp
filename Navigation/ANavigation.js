import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
    SafeAreaView,
    Button
  } from 'react-native';



/*Admin Screesn Imports */

import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import HomeScreen from '../screens/AHome/Home/Home';
import Contacts from '../screens/AHome/Contact/Contacts';
import ContactDetails from '../screens/AHome/Contact/ContactDetails';
import TrackSecurity from '../screens/AHome/TrackSecurity/TrackSecurity';
import ComplaintAndSuggestion from '../screens/AHome/ComplaintAndSuggestions/ComplaintsSuggestion';
import Complaints from '../screens/AHome/ComplaintAndSuggestions/Complaints';
import Suggestions from '../screens/AHome/ComplaintAndSuggestions/Suggestions';
import Settings from '../screens/AHome/Settings/Settings';
import UpdateAccount from '../screens/AHome/Settings/AccountSetting/updateAccount';
import DelResidentSecurity from '../screens/AHome/Settings/DelResidentSecurity/DelResidentSecurity'


const Stack = createStackNavigator();

export default function ANavigation(){
    return(
    <SafeAreaProvider>
    
        <Stack.Navigator >
            {/* <Stack.Screen name="SignIn" component={Login} options={{ headerShown:false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown:false }} /> */}
            <Stack.Screen 
              name="AHomeScreen" 
              component={HomeScreen} 
              options={{
                title: 'Admin Home',
             }} />
         
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="ContactDetails" component={ContactDetails} />
          <Stack.Screen name="TrackSecurity" component={TrackSecurity} />
          <Stack.Screen name="ComplaintAndSuggestion" component={ComplaintAndSuggestion} />
          <Stack.Screen name="Complaints" component={Complaints} />
          <Stack.Screen name="Suggestions" component={Suggestions} />
          <Stack.Screen name="Settings" component={Settings} /> 
          <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
          <Stack.Screen name="DelResidentSecurity" component={DelResidentSecurity}/>

          </Stack.Navigator>
      
     </SafeAreaProvider>
      );
  }