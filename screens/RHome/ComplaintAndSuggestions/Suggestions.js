import React, {Component} from 'react';
import { 
  View, 
  Text ,
  StyleSheet,
  Button, 
  SafeAreaView, 
  TextInput 
} from 'react-native';
 import { ip } from '../../../components/Context';

export default class Suggestions extends Component  {

  constructor(props){
    super(props)
    this.state = {
        feedback:'',
        name:'',
        phone_number:'',
   }
}

submitFeedback = () =>{
        const {name} = this.state;
        const {phone_number} = this.state;
        const {feedback} = this.state;

  if(feedback==""){
      alert('Description of Feedback cannot be empty!');
  }else if(name==""){
      alert('Name field is empty!');
  }else if(phone_number==""){
      alert('Phone Number cannot be empty!');
  }else{
      fetch(ip+':9090/rsuggestion',{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, phone_number: phone_number, feedback:feedback})

  }).then((responseData) => {
      return responseData.json();
  }).then((jsonData) => {
      console.log(jsonData);
      this.setState({naData: jsonData})
      console.log(this.state.naData)
  }).done();
  this.name = "";
  this.phone_number = "";
  this.feedback="";

  alert("Thanks for Feedback..!!");
  }
  }

 
  render() {
   
  return (
    <SafeAreaView style={styles.container}>
      <View style = {{ marginTop: 20}}>
        <Text style={styles.txt}>Feedback Form</Text>
        <Text >We would love to hear your thoughts, concerns or problems with anything so we can improve!</Text>
      
      
    
      <Text style ={{fontWeight: "bold",marginTop: 20}}>Describe Feedback:  * </Text>
      <TextInput style={styles.textinputlarge}
        onChangeText= {feedback => this.setState({feedback}) }/>
      <Text style ={{fontWeight: "bold"}}> Name:  * </Text>
      <TextInput style={styles.textinput}
        onChangeText= {name => this.setState({name}) }/>
      <Text style ={{fontWeight: "bold", marginTop: 15}}>Ph-Number:  * </Text>
      <TextInput style={styles.textinput} 
          placeholder="ex: 0308******97"
          keyboardType= "email-address"
          onChangeText= {phone_number => this.setState({phone_number}) }/>
  
      <View style = {{padding: 50}}>
      <Button 
            title="Submit Feedback" 
            color="#737373"
            onPress={this.submitFeedback}/>
      
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
  
  txt:{
    fontWeight:"bold",
    marginBottom: 5,
    fontSize: 20
  },
  textinput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom:5,
    
    
  },
  textinputlarge:{
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom:5
    
    
  }
});