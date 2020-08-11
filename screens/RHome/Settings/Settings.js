import React, { Component, useContext,useState } from 'react';
import { View, Text,StyleSheet,SafeAreaView ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from '../../../components/Context'

function Separator() {
  return <View style={styles.separator} />;
}


const  Settings =({navigation}) => {

const {signOut} = useContext(AuthContext);

const HandleSignOut = () => {
  signOut();
}

  return (
    <SafeAreaView style={styles.container}>
      <View style = {{ marginTop: 50}}>
        <Button 
          title="Sensor Settings"
          onPress={() => navigation.navigate('SensorSettings')}
        />
      <Separator />
      <Button
          title="Account Settings"
          onPress={() => navigation.navigate('AccountSettings')}
        />
      <Separator />
      <Button 
          title="Logout"
          onPress={() => {HandleSignOut()}}
        />
        </View>
      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Settings;