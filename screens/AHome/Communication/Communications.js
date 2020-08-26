import React, { Component } from 'react';
import { View, Text,SafeAreaView,StyleSheet,Button,ImageBackground } from 'react-native';


function Separator() {
  return <View style={styles.separator} />;
}

export default class  Communications extends Component {

  render(){
    return (
      <ImageBackground 
                source={require('../../../images/communication.jpg')}
                style={styles.mainBack}>
      <SafeAreaView style={styles.container}>
        <View style = {{ marginTop: 50}}>
          <Button style={styles.button}
            title="Contacts"
            onPress={() => this.props.navigation.navigate('Contact')}
          />
        <Separator />
        <Button
            title="Message"
            onPress={() => this.props.navigation.navigate('Sms')}
          />
          </View>
        
      </SafeAreaView>
      </ImageBackground>
    );
  }
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
  mainBack:{
    flex:1,
    width:'100%',
    height:'100%',
  },
buttonText: {
  fontSize:16,
  fontWeight:'500',
  color:'#ffffff',
  textAlign:'center',
},
});
