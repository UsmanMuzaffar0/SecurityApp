import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Logo = () => {
    return(
        <View style={styles.container}> 
            <Image  style={{width: 135, height: 135, borderRadius:30}}
            source={require('../images/logo.png')} />
            <Text style={styles.logoText}>Secure Life</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'flex-end',
      alignItems:'center',
      paddingTop:30
    },
    logoText: {
        marginVertical: 15,
        fontSize: 25,
        color: 'rgba(255,255,255,0.9)',
       // color:'white',
        fontWeight:'bold'
    }
   });

   export default Logo;