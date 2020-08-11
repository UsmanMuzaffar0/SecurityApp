import React, { Component, useContext,useState } from 'react';
//import SignupForm from '../../components/SignupForm';
import signupStyle from './signupStyle';
import { RadioButton, Colors } from 'react-native-paper';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Keyboard,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import {AuthContext} from '../../components/Context';

//import { text, json } from 'body-parser';

const Signup = (props) => {

  
    const [name, setName] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('R');

   


    // SignupButton = () => {
    //     const {name} = this.state;
    //     const {phone_number} = this.state;
    //     const {password} = this.state;
    //     const {checked} = this.state;
       
    //     if(name==""){
    //         alert('Name field is empty!');
    //     }else if(phone_number==""){
    //         alert('Phone number is required!');
    //     }else if(password==""){
    //         alert('Password cannot be empty!');
    //     }else if(checked=='resident'){
    //         fetch('http://192.168.10.2:9090/resident',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: name, phone_number: phone_number, password: password})

    //     }).then((responseData) => {
    //         return responseData.json();
    //     }).then((jsonData) => {
    //         console.log(jsonData);
    //         this.setState({naData: jsonData})
    //         console.log(this.state.naData)
    //     }).done();
    //     this.name = "";
    //     this.phone_number = "";
    //     this.password = "";

    //     Toast.show('Resident Account created succesfully!',Toast.LONG);

    //     }
    //     else if(checked=='security'){
    //         fetch('http://192.168.10.2:9090/security',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: name, phone_number: phone_number, password: password})

    //     }).then((responseData) => {
    //         return responseData.json();
    //     }).then((jsonData) => {
    //         console.log(jsonData);
    //         this.setState({naData: jsonData})
    //         console.log(this.state.naData)
    //     }).done();
    //     this.name = "";
    //     this.phone_number = "";
    //     this.password = "";

    //     Toast.show('Security Account created succesfully!',Toast.LONG);

    //     }
    //     else if(checked=='admin'){
            
    //         fetch('http://192.168.10.2:9090/admin',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: name, phone_number: phone_number, password: password})

    //     }).then((responseData) => {
    //         return responseData.json();
    //     }).then((jsonData) => {
    //         console.log(jsonData);
    //         this.setState({naData: jsonData})
    //         console.log(this.state.naData)
    //     }).done();
    //     this.name = "";
    //     this.phone_number = "";
    //     this.password = "";

    //     Toast.show('Admin Account created succesfully!',Toast.LONG);

    //     } else {
    //         Toast.show('radio button not selected',Toast.LONG);
    //     }
    
    //     Keyboard.dismiss();
    
    // }

const {signUp} = useContext(AuthContext);

const HandleSignUp  =  (name,role,phone_number,password) => {
    
        if(name==""){
                alert('Name field is empty!');
        }else if(phone_number==""){
                alert('Phone number is required!');
        }else if(password==""){
                alert('Password cannot be empty!');
        }else if(role==""){
                alert('Please select the User Roll!')
        }else{
            signUp(name,role,phone_number,password);
        }
}

        return(
            <ImageBackground 
                source={require('../../images/signup.jpg')}
                style={signupStyle.mainBack}>
                    
                    <View style={signupStyle.overlayContainer}>

                        <View style={signupStyle.container}>
                            <Text style={signupStyle.top}>Register Your Account</Text>
                            
                            <View style={styles.container}> 

                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Name"
                    keyboardType="name-phone-pad"
                    placeholderTextColor="#ffffff"
                    onChangeText= {name => setName({name}) }
                    autoCapitalize="none" />
    
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Number"
                    keyboardType="phone-pad"
                    placeholderTextColor="#ffffff"
                    onChangeText= {phone_number => setPhone_number({phone_number}) }
                   />
    
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    onChangeText= {password => setPassword({password}) }
                     />

                    <View style={{flexDirection:"row"}}>
                        <RadioButton 
                            value="R"
                            color={Colors.blueA100}
                            status={role === 'R' ? 'checked' : 'unchecked' }
                            onPress={() =>{setRole('R')} }/>
                        <Text style={{fontSize:16, fontWeight:"200", paddingTop:6, color:'#ffffff'}}>Resident</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <RadioButton 
                            value="S"
                            color={Colors.blueA100}
                            status={role === 'S' ? 'checked' : 'unchecked' }
                            onPress={() => {setRole('S')}}/>
                        <Text style={{fontSize:16, fontWeight:"200", paddingTop:6,paddingRight:5, color:'#ffffff'}}>Security</Text>
                    </View>
    
                <TouchableOpacity style={styles.button} onPress={ () => {HandleSignUp(name,role,phone_number,password)}} >
                <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>

                            <View style={signupStyle.signupTextCont}>
                                <Text style={signupStyle.signupText}>Already have an account? </Text> 
                                <TouchableOpacity onPress={()=>props.navigation.navigate('SignIn')}>
                                    <Text style={signupStyle.signupButton} >Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
             </ImageBackground>
                    

            
        );
    }    

export default Signup;
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
        marginVertical:10
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
    },
    button: {
        backgroundColor:'#607d8b',
        borderRadius: 25,
        opacity:0.9,
        marginVertical:10,
        width:250,
        paddingVertical:12,
        marginTop:35
    }
   });
