import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';





/*Security Screesn Imports */

import HomeScreen from '../screens/SHome/Home/SHome';
import Contact from '../screens/SHome/Communication/Contact';
import Help from '../screens/SHome/Help/Help';
import UpdateAccount from '../screens/SHome/Settigns/UpdateAccount/UpdateAccount';
import TrackResident from '../screens/SHome/TrackResident/TrackResident';
import Settigns from '../screens/SHome/Settigns/Settings';
import Communication from '../screens/SHome/Communication/Communications';
import Chat from '../screens/SHome/Communication/Chat';
import Sms from '../screens/SHome/Communication/Sms';

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
           
            <Stack.Screen  
                name="SHomeScreen" 
                component={HomeScreen} 
                options={{
                  title: 'Security Home',
                }} />
            
            <Stack.Screen name="Contact" component={Contact}  />
            <Stack.Screen name="Chat" component={Chat}  />
            <Stack.Screen name="Sms" component={Sms}  />
            <Stack.Screen name="Communication" component={Communication}/>
            <Stack.Screen name="Help" component={Help}  />
            <Stack.Screen name="TrackResident" component={TrackResident}  />
            <Stack.Screen name="UpdateAccount" component={UpdateAccount} 
              options={{
                title: 'Update Account',
              }} />
            <Stack.Screen name="Settings" component={Settigns}  />

          </Stack.Navigator>
       
    </SafeAreaProvider>
    );
}