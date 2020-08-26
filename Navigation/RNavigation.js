import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
    SafeAreaView,
    Button,
    AsyncStorage
  } from 'react-native';

/*Resident Screens Imports */

import Signup from '../screens/Signup/Signup';
import HomeScreen from '../screens/RHome/Home/RHome';
import Contact from '../screens/RHome/Communication/Contact';
import EmergencySignal from '../screens/RHome/EmergencySignal/EmergencySignal';
import Help from '../screens/RHome/Help/Help';
import Settings from '../screens/RHome/Settings/Settings';
import FireHazardsSensors from '../screens/RHome/Settings/SensorSettings/FireHazardSensor';
import IntrusionSesnors from '../screens/RHome/Settings/SensorSettings/IntrusionSensor';
import SensorSettings from '../screens/RHome/Settings/SensorSettings/SensorSetting';
import AccountSettings from '../screens/RHome/Settings/AccountSettings/AccountSettings';
import ComplaintAndSuggestion from '../screens/RHome/ComplaintAndSuggestions/ComplaintsSuggestion';
import Complaints from '../screens/RHome/ComplaintAndSuggestions/Complaints';
import Suggestions from '../screens/RHome/ComplaintAndSuggestions/Suggestions';
import TrackSecurity from '../screens/RHome/TrackSecurity/TrackSecurity';
import Communication from '../screens/RHome/Communication/Communications';
import Chat from '../screens/RHome/Communication/Chat';
import Sms from '../screens/RHome/Communication/Sms';

const Stack = createStackNavigator();


export default class ANavigation extends Component{

  logout(){
    console.log("Logging Out");
    AsyncStorage.clear()
    .then(() =>{
      this.props.navigation.navigate('SignIn');
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render(){
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
              name="RHomeScreen" 
              component={HomeScreen} 
              options={{
                title: 'Resident Home',
              }} />
            <Stack.Screen name="Contact" component={Contact}  />
            <Stack.Screen name="Chat" component={Chat}  />
            <Stack.Screen name="Sms" component={Sms} />
            <Stack.Screen name="Communication" component={Communication}/>
            <Stack.Screen name="EmergencySignals" component={EmergencySignal} 
              options={{
                title: 'Emergency Signal',
              }} />
            <Stack.Screen name="Helps" component={Help}  />
            <Stack.Screen name="ComplaintAndSuggestion" component={ComplaintAndSuggestion} 
              options={{
                title: 'Complaint and Suggestions',
              }} />
            <Stack.Screen name="Complaints" component={Complaints} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="TrackSecurity" component={TrackSecurity} />
            <Stack.Screen name="Settings" component={Settings} /> 
            <Stack.Screen name="SensorSettings" component={SensorSettings} 
              options={{
                title: 'Sensor Settings',
              }} /> 
            <Stack.Screen name="Firehazard" component={FireHazardsSensors}  />
            <Stack.Screen name="Intrusion" component={IntrusionSesnors} /> 
            <Stack.Screen name="AccountSettings" component={AccountSettings} 
              options={{
                title: 'Update Account',
              }} />
        </Stack.Navigator>
       
    </SafeAreaProvider>
    );
}
}