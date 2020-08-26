/*This is an Example of Sending Text SMS in React Native*/
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import SendSMS from 'react-native-sms'
import { TextInput } from 'react-native-paper';

export default class Sms extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            phone_number:'',
            
       }
    }

  someFunction() {
    const {phone_number} = this.state;
    SendSMS.send({
        //Message body
        body: '',
        //Recipients Number
        recipients: [phone_number],
        //An array of types that would trigger a "completed" response when using android
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
        if(completed){
          console.log('SMS Sent Completed');
        }else if(cancelled){
          console.log('SMS Sent Cancelled');
        }else if(error){
          console.log('Some error occured');
        }
    });
  }
  render() {
    return (
      <ImageBackground 
                source={require('../../../images/message.jpg')}
                style={styles.mainBack}>
      <View >
          <TextInput style={styles.textinput}
            keyboardType="phone-pad"
            placeholder ="Type Your Phone Number"
            onChangeText= {phone_number => this.setState({phone_number}) }/>
        <TouchableOpacity onPress={this.someFunction.bind(this)}>
        <View>
          <Text style={styles.text}>Send SMS</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    color: 'white',
    textAlign:'center',
    fontSize: 25,
    marginTop:16,
    fontWeight:"bold"
  },
  textinput:{
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 50,
    borderRadius:20,
    marginBottom:5
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  mainBack:{
    flex:1,
    width:'100%',
    height:'100%',
  },
});