import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView ,TouchableOpacity,FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import { ip } from '../../../../components/Context';

function Separator() {
    return <View style={styles.separator} />;
  }

export default class UpdateAccount extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone_number: '',
            password: '', 

       }
    
    }
    UpdateAccount = () =>{
        const {name} = this.state;
        const {phone_number} = this.state;
        const {password} = this.state;
        // alert('name:' + name + 'phone_number:' + phone_number + 'password:' + password);

        fetch(ip+':9090/users',{
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: name,
                phone_number: phone_number,
                password: password})

        }).then((responseData) => {
            return responseData.json();
        }).done();
        this.state.name= null;
        this.state.phone_number= null;
        this.state.password= null;
        
        Toast.show('Resident Data Updated!',Toast.LONG);
    }


    render(){

        
        return(
        <SafeAreaView style={styles.container}>
            <View style = {{ marginTop: 5}}>
          
                <Text style ={{fontWeight: "bold",marginTop:5}}>Name: </Text>
                <TextInput style={styles.textinput}
                keyboardType="name-phone-pad"
                onChangeText= {name => this.setState({name}) }/>

                <Separator/>

                <Text style ={{fontWeight: "bold",marginTop:5}}>Ph-Number: </Text>
                <TextInput style={styles.textinput}
                keyboardType="phone-pad"
                onChangeText= {phone_number => this.setState({phone_number}) }/>

                <Separator/>

                <Text style ={{fontWeight: "bold",marginTop:5}}>Password: </Text>
                <TextInput style={styles.textinput}
                keyboardType= "visible-password"
                onChangeText= {password => this.setState({password}) }/>
        
                <View style = {{alignSelf: "center"}}>
                    <TouchableOpacity style={styles.button} onPress={this.UpdateAccount} >
                        <Text style={styles.buttonText}>Update Account</Text>
                    </TouchableOpacity>
                </View>
               
            </View>
            
        </SafeAreaView>
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
   
    textinput:{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 5,
      marginBottom:5
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
      width:300,
      paddingVertical:12,
  }
  });