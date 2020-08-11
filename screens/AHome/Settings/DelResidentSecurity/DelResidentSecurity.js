import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView ,TouchableOpacity,FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import { ip } from '../../../../components/Context';


export default class DelResidentSecurity extends Component{

    constructor(props){
        super(props)
        this.state = {
            apiData: [],
            id: '' 

       }
    //    this.id= null;
    }
    DeleteUsers = () =>{
         const {id} = this.state;
        fetch(ip+':9090/users/' + (this.state.id),{
            method: 'DELETE'
        }).then((res)=> {
            console.log(res.rows)
        }).done();
            this.id= null;
        Toast.show('User Deleted!',Toast.LONG);
    }

    
    ViewUsers = () =>{
        fetch(ip+':9090/users',{
            method:'GET'
        }).then((responseData) => {
            return responseData.json();
        }).then((jsonData) => {
            console.log(jsonData);
            this.setState({apiData: jsonData})
            console.log(this.state.apiData)
        }).done();
        this.id = null;
        
    }
    
    

    render(){

        const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return(
                <View key={jsonData.id}>
                    <View style={{backgroundColor:'#546e7a',padding:10,margin:10}}>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>id: {jsonData.id}</Text>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Name: {jsonData.name}</Text>
                        <Text style={{color:'#ffffff'}}>Ph-Number: {jsonData.phone_number}</Text>
                        <Text style={{color:'#ffffff'}}>Role: {jsonData.role}</Text>
                       
                    </View>
                </View>
            )
        });
        return(
        <SafeAreaView style={styles.container}>
            <View style = {{ marginTop: 5}}>
          
                <Text style ={{fontWeight: "bold",marginTop:5}}>Enter ID: </Text>
                <TextInput style={styles.textinput}
                keyboardType="name-phone-pad"
                onChangeText= {id => this.setState({id}) }/>
        
        
                <View style = {{alignSelf: "center"}}>
                    <TouchableOpacity style={styles.button} onPress={this.DeleteUsers} >
                        <Text style={styles.buttonText}>Delete User</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{alignSelf: "center"}}>
                    <TouchableOpacity style={styles.button} onPress={this.ViewUsers} >
                        <Text style={styles.buttonText}>View Users</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {dataDisplay}
            </ScrollView>
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