import React, { Component } from 'react';
import { View, Text,SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ip } from '../../../components/Context';

function Separator() {
  return <View style={styles.separator} />;
}

export default class  Complaints extends Component{

  constructor(props){
    super(props)
    this.state = {
        name:'',
        phone_number:'',
        nature:'',
        details:''
   }
}
 
  submitComplaint = () =>{
        const {name} = this.state;
        const {phone_number} = this.state;
        const {nature} = this.state;
        const {details} = this.state;

  if(name==""){
      alert('Name field is empty!');
  }else if(phone_number==""){
      alert('Phone number is required!');
  }else if(nature==""){
      alert('Nature of Complaint cannot be empty!');
  }else if(details==""){
      alert('details of the Complaint cannot be empty!')
  }else{
      fetch(ip+':9090/complaint',{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, phone_number: phone_number, nature: nature,details: details})

  }).then((responseData) => {
      return responseData.json();
  }).then((jsonData) => {
      console.log(jsonData);
      this.setState({naData: jsonData})
      console.log(this.state.naData)
  }).done();
  this.name = "";
  this.phone_number = "";
  this.nature = "";
  this.details = "";

  alert("Thanks for complaint, We will further take action as soon as possible..!!");


  }
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{ marginTop: 5}}>
          <Text style={styles.txt}>------We are here to assist you!------</Text>
          <Text style = {{textAlign:"center"}}>Please complete the form below for your complaints</Text>
        <Separator />
        <Text style ={{fontWeight: "bold",marginTop:5}}>Name: </Text>
        <TextInput style={styles.textinput}
            keyboardType="name-phone-pad"
            onChangeText= {name => this.setState({name}) }/>
        <Text style ={{fontWeight: "bold"}}>Ph-Number: </Text>
        <TextInput style={styles.textinput} 
            placeholder="ex: 0308******97"
            keyboardType= "phone-pad"
            onChangeText= {phone_number => this.setState({phone_number}) }/>
        <Separator />
        <Text style ={{fontWeight: "bold"}}>The nature of Complaint: </Text>
        <TextInput style={styles.textinputlarge}
            onChangeText= {nature => this.setState({nature}) } />
        <Text style ={{fontWeight: "bold"}}>The specific details of Complaint: </Text>
        <TextInput style={styles.textinputlarge} 
            onChangeText= {details => this.setState({details}) }/>
        <View style = {{padding: 30, marginTop: 1}}>
        
        <TouchableOpacity style={styles.button} onPress={this.submitComplaint} >
                <Text style={styles.buttonText}>Submit</Text>
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
  txt:{
    textAlign: "center",
    fontWeight:"bold",
    marginBottom: 5,
    fontSize: 20
  },
  textinput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom:5
  },
  textinputlarge:{
    height: 100,
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
