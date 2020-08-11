import React, { Component ,useContext,useState} from 'react';
import Logo from '../../components/Logo';
import RHomeScreen from '../RHome/Home/RHome';
import SHomeScreen from '../SHome/Home/SHome';
import AHomeScreen from '../AHome/Home/Home';
import loginStyle from './loginStyle';
import {AuthContext} from '../../components/Context';

import {
  StyleSheet,
  ImageBackground,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { RadioButton, Colors } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
//import { response } from 'express';


const Login = (props)  =>{
  
 const [phone_number, setPhone_number] = useState('');
 const [password, setPassword] = useState('');



    

// componentDidMount(){
//   this._loadInitialState().done();
// }
// _loadInitialState = async () => {
//   var value = await AsyncStorage.getItem('phone_number');
//   if (value !== null){
//     this.props.navigation.navigate('RHomeScreen');
//   }
// }
  // state = {
  //   checked: 'resident',
  // };

//   login = () => {
//     const {phone_number} = this.state;
//     const {password} = this.state;
//     const {checked} = this.state;
//    //alert(this.state.phone_number);
//    if(phone_number==""){
//     alert('Phone number is required!');
//   }else if(password==""){
//       alert('Password cannot be empty!');
//   }else if(checked=='resident'){
//     fetch('http://192.168.10.2:9090/Rlogin',{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         phone_number: this.state.phone_number,
//         password: this.state.password,
//       })
//     })

//     .then((response)=> response.json())
//     .then((res) => {
//       if(res.success === true){
//         var phone_number = res.message;
//         AsyncStorage.setItem('phone_number',phone_number);
//         this.props.navigation.navigate('RHomeScreen');
//       }
//       else{
//         alert(res.message);
//       }
//     })
//     .done();
//   } else if(checked=='security'){

//     fetch('http://192.168.10.2:9090/Slogin',{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         phone_number: this.state.phone_number,
//         password: this.state.password,
//       })
//     })

//     .then((response)=> response.json())
//     .then((res) => {
//       if(res.success === true){
//         var phone_number = res.message;
//         AsyncStorage.setItem('phone_number',phone_number);
//         this.props.navigation.navigate('SHomeScreen');
//       }
//       else{
//         alert(res.message);
//       }
//     })
//     .done();

//   }else if(checked=='admin'){

//     fetch('http://192.168.10.2:9090/Alogin',{
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         phone_number: this.state.phone_number,
//         password: this.state.password,
//       })
//     })

//     .then((response)=> response.json())
//     .then((res) => {
//       if(res.success === true){
//         var phone_number = res.message;
//         AsyncStorage.setItem('phone_number',phone_number);
//         this.props.navigation.navigate('AHomeScreen');
//       }
//       else{
//         alert(res.message);
//       }
//     })
//     .done();

//   }else {
//     Toast.show('Radio Button not selected!',Toast.LONG);
//   }
// }


const {signIn} = useContext(AuthContext);

const handleLogin  =  (phone_number,password) => {
    

  if(phone_number==""){
    alert('Phone number is required!');
  }else if(password==""){
    alert('Password cannot be empty!');
  }else {
    signIn(phone_number,password);
  }

    // if((phone_number!='') && (password!='')){
    //   signIn(phone_number,password);
    // }else{
    //   alert('in valid fileds');
    // }


}



      return(
        <ImageBackground
          source={require('../../images/background.jpg')}
          style={loginStyle.mainBack}>
            <View style={loginStyle.overlayContainer}>

            <View style={loginStyle.container}>
                <Logo />

                <View style={styles.container}> 
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Number"
                    keyboardType="phone-pad"
                    placeholderTextColor="#ffffff"
                    onChangeText={(phone_number)=> setPhone_number(phone_number)}
                    value={phone_number}
                     />
                    
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    onChangeText={(password)=> setPassword(password)}
                    value={password} />
                
                <TouchableOpacity style={styles.button} onPress={() => {handleLogin(phone_number,password) }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

                <View style={loginStyle.signupTextCont}>
                   <Text style={loginStyle.signupText}>Don't have an account yet? </Text> 
                   <TouchableOpacity onPress={() => {props.navigation.navigate('Signup')}}>
                        <Text style={loginStyle.signupButton} >Signup</Text>
                   </TouchableOpacity>
                </View>
             </View>

            </View>
        </ImageBackground>
      );
    }
export default Login;


const styles= StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox: {
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius:25,
      padding:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical:6
  },
  buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
  },
  button: {
      //backgroundColor:'#1c313a',
      backgroundColor:'#607d8b',
      opacity:0.9,
      borderRadius: 25,
      marginVertical:20,
      width:250,
      paddingVertical:10,
      marginTop:70
  },
 });
