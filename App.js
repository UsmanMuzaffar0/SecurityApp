import React, { Component,useReducer,useMemo,useEffect } from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Keyboard,
  AsyncStorage,
  unstable_enableLogBox,
  Alert
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ANav from './Navigation/ANavigation';
import SNav from './Navigation/SNavigation';
import RNav from './Navigation/RNavigation';
import RootStackScreen from './RootStackScreen';

// it work as container to pass the state / function globally in all the screen of app 
import {AuthContext , ip} from './components/Context';
import { cos } from 'react-native-reanimated';

const Stack = createStackNavigator();

const  App = () => {

  const intialLogInState = {
      userToken : null,
      userRole : null,
  }


  const loginReducer = (prevState,action) => {
    switch (action.type) {
      case 'REGISTER':
        return{
          ...prevState,
          userToken:action.token,
          userRole:action.role,
  
        };
  
        case 'LOGIN':
        return{
          ...prevState,
          userToken:action.token,
          userRole:action.role,
        };


        case 'RETRIVE_TOKEN':
        return{
          ...prevState,
          userToken:action.token,
          userRole:action.role,
        };


          case 'LOGOUT':
            return{
              ...prevState,
              userToken:null,
              userRole:null,
            };
  
  


    }
    
  }


  const [loginState,dispatch] = useReducer(loginReducer,intialLogInState);


  // after memorization it can export it globally where it call 

const authContext = useMemo( () => (
  {

    signIn : async (userNumber, userPassword) =>{
      console.log('Sign In function called ');
      console.log('User number is => '+userNumber);
      console.log('User password is => '+userPassword);

      let token = "jndfsdnfsdmfmsd;fsldmfsmfsdmsfd.fm";

     const getloginDetails = () => {
        return  fetch(ip+':9090/users',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            phone_number: userNumber,
            password:userPassword,
          }
          )
        }
        
        )
          .then((response) => response.json())
          .then((json) => {
            // console.log(json.role);
            console.log((json))
            if(json.message == "User not found! please try again!"){
              Alert.alert('Ooops!!!','invalid Credenntials');
            }else{
               SaveUserDetailsInLocalStorageAfterSignIn(json.role,token);

            }
            
            

          })
          .catch((error) => {
            console.error(error);
          });
      };

      getloginDetails();




    },
  
    signOut : async () =>{
        AsyncStorage.clear();
        dispatch({type:'LOGOUT'});
      },
      
    signUp : async (usename,role,number,pas) =>{

      let {phone_number} = number;
      let {name} = usename;
      let {password} = pas;
      
      let token = "jndfsdnfsdmfmsd;fsldmfsmfsdmsfd.fm";
      
      // console.log('Sign Up function called ');
      // console.log('User number is => '+(phone_number));
      // console.log('User password is => '+(password));
      // console.log('User name is => '+(name));
      // console.log('User u_Role is => '+(role));

  try {
  
      fetch(ip+':9090/register-user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          phone_number: phone_number,
          password:password,
          role:role,
        })
      }).then((response) => response.json())
      .then((json) => {
        console.log(json.role);
        // console.log(typeof(json.role));
        // dispatch({type:'LOGIN',token:token,role:json.role})
        
        SaveUserDetailsInLocalStorageAfterSignup(role, token);

      })
      .catch((error) => {
        console.error(error);
      });

      
    } catch (error) {
      console.log(error.message)
    }
    
       

    },
    
  
  }
)); 

SaveUserDetailsInLocalStorageAfterSignup = async (role, token) => {
  try{

     await AsyncStorage.setItem('role',role);
     await AsyncStorage.setItem('userToken',token);

  }catch(e){
    console.log(e.message);
  }
  dispatch({type:'REGISTER',token:token,role:role});
}

SaveUserDetailsInLocalStorageAfterSignIn = async (role,token) => {
  
  
  try{

    await AsyncStorage.setItem('role',role);
    await AsyncStorage.setItem('userToken',token);

  }catch(error){
    console.log(error.message)
  }
  dispatch({type:'LOGIN',token:token,role:role});
}

//userEffect runs after the return 

useEffect(  () => {
  getXyx();
},[])


const getXyx = async () => {
  let userToken;
  
  userToken= null;
  let userRole;
  userRole=null;
  try{
    userToken= await AsyncStorage.getItem('userToken');
    let role = await AsyncStorage.getItem('role');
    userRole = role;

    console.log('User role is => '+ role);
    console.log('user role type is => '+typeof role);
    
    }catch(e){
    console.log(e.message);
  }

  dispatch({type:'RETRIVE_TOKEN', role: userRole, token: userToken});

}


 const HandleRole = () => {

  if(loginState.userRole === "R"){
    return <RNav /> 
  }
  else if(loginState.userRole === "A"){
    return  <ANav /> 
  }
  else if(loginState.userRole === "S"){
    return <SNav /> 
  }else{
    console.log('This is run');
  }

}
  return (
   <AuthContext.Provider value={authContext}>
        <NavigationContainer>

        {loginState.userToken!=null?
        <HandleRole />
            :
            <RootStackScreen />
        }

        </NavigationContainer>
   </AuthContext.Provider>
     
   );
}

export default App;






// https://www.youtube.com/watch?v=AzjWv1X-uyg   
// react native maps video 