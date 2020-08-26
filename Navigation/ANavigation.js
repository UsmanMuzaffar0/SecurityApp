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
import Contacts from '../screens/AHome/Communication/Contact';
import TrackSecurity from '../screens/AHome/TrackSecurity/TrackSecurity';
import ComplaintAndSuggestion from '../screens/AHome/ComplaintAndSuggestions/ComplaintsSuggestion';
import Complaints from '../screens/AHome/ComplaintAndSuggestions/Complaints';
import Suggestions from '../screens/AHome/ComplaintAndSuggestions/Suggestions';
import Settings from '../screens/AHome/Settings/Settings';
import UpdateAccount from '../screens/AHome/Settings/AccountSetting/updateAccount';
import DelResidentSecurity from '../screens/AHome/Settings/DelResidentSecurity/DelResidentSecurity'
import Communication from '../screens/AHome/Communication/Communications';
import GroupChat from '../screens/AHome/Groups/GroupChat';
import Sms from '../screens/AHome/Communication/Sms';
import Records from '../screens/AHome/Recods/Records';



const Stack = createStackNavigator();

export default function ANavigation(){
    return(
    <SafeAreaProvider>
    
        <Stack.Navigator screenOptions={{
          headerTintColor:'white',
          headerTitleAlign:"center",
          headerStyle:{
            backgroundColor:'#1c313a',
            opacity:0.8
          }
        }} >
            {/* <Stack.Screen name="SignIn" component={Login} options={{ headerShown:false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown:false }} /> */}
            <Stack.Screen 
              name="AHomeScreen" 
              component={HomeScreen} 
              options={{
                title: 'Admin Home',
                headerTintColor:'white',
                headerTitleAlign:"center",
             }} />
           <Stack.Screen name="Contact" component={Contacts} />  
          <Stack.Screen name="Sms" component={Sms} />
          <Stack.Screen name="GroupChat" component={GroupChat}  />
          <Stack.Screen name="Communication" component={Communication}/>
          <Stack.Screen name="TrackSecurity" component={TrackSecurity} />
          <Stack.Screen name="ComplaintAndSuggestion" component={ComplaintAndSuggestion} 
            options={{
              title:'Complaint and Suggestions'
            }} />
          <Stack.Screen name="Complaints" component={Complaints} />
          <Stack.Screen name="Suggestions" component={Suggestions} />
          <Stack.Screen name="Settings" component={Settings} /> 
          <Stack.Screen name="UpdateAccount" component={UpdateAccount} 
            options={{
              title:'Update Account'
            }} />
          <Stack.Screen name="DelResidentSecurity" component={DelResidentSecurity}
            options={{
              title:'Delete Accounts'
            }}/>
          <Stack.Screen name="Records" component={Records} />  
          </Stack.Navigator>
      
     </SafeAreaProvider>
      );
  }