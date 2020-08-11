import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';





/*Security Screesn Imports */

import HomeScreen from '../screens/SHome/Home/SHome';
import Contact from '../screens/SHome/Contact/Contact';
import SignalBlink from '../screens/SHome/SignalBlink/SignalBlink';
import Help from '../screens/SHome/Help/Help';
import UpdateAccount from '../screens/SHome/Settigns/UpdateAccount/UpdateAccount';
import TrackResident from '../screens/SHome/TrackResident/TrackResident';
import MatchCode from '../screens/SHome/MatchCode/MatchCode';
import Settigns from '../screens/SHome/Settigns/Settings';

const Stack = createStackNavigator();

export default function ANavigation(){
    return(
    <SafeAreaProvider>
     
        <Stack.Navigator >
           
            <Stack.Screen  
                name="SHomeScreen" 
                component={HomeScreen} 
                options={{
                  title: 'Security Home',
                }} />
            
            <Stack.Screen name="Contact" component={Contact}  />
            <Stack.Screen name="SignalBlink" component={SignalBlink}  />
            <Stack.Screen name="Help" component={Help}  />
            <Stack.Screen name="TrackResident" component={TrackResident}  />
            <Stack.Screen name="MatchCode" component={MatchCode}  />
            <Stack.Screen name="UpdateAccount" component={UpdateAccount}  />
            <Stack.Screen name="Settings" component={Settigns}  />

          </Stack.Navigator>
       
    </SafeAreaProvider>
    );
}