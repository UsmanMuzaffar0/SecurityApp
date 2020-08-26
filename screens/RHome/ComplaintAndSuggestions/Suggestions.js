import React, {Component} from 'react';
import { 
  View, 
  Text ,
  StyleSheet,
  Button, 
  SafeAreaView, 
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
 import { ip } from '../../../components/Context';
 import { TextInput } from 'react-native-paper';
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
    <ImageBackground 
                source={require('../../../images/comSuggest.jpg')}
                style={{flex:1, width:'100%', height:'100%'}}>
    <SafeAreaView style={styles.container}>
      <View style = {{ marginTop: 20}}>
        <Text style={styles.txt}>Feedback Form</Text>
        <Text style={{color:'#ffffff',fontWeight:'300',fontSize:17}} >We would love to hear your thoughts, concerns or problems with anything so we can improve!</Text>
      
      
    
      <Text style ={{fontWeight:"bold",marginTop:18,fontSize:17,color:'#ffffff'}}>Describe Feedback:  * </Text>
      <TextInput style={styles.textinputlarge}
        onChangeText= {feedback => this.setState({feedback}) }/>
      <Text style ={{fontWeight: "bold",fontSize:17,color:'#ffffff',marginTop:18}}> Name:  * </Text>
      <TextInput style={styles.textinput}
        onChangeText= {name => this.setState({name}) }/>
      <Text style ={{fontWeight:"bold", marginTop:18,fontSize:17,color:'#ffffff'}}>Ph-Number:  * </Text>
      <TextInput style={styles.textinput} 
          placeholder="ex: 0308******97"
          keyboardType= "email-address"
          onChangeText= {phone_number => this.setState({phone_number}) }/>
  
      <View style = {{padding: 50}}>
        <TouchableOpacity style={styles.button} onPress={this.submitFeedback} >
                <Text style={styles.buttonText}>Submit FeedBack</Text>
        </TouchableOpacity>
      
      </View>
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
  
  txt:{
    fontWeight:"bold",
    marginBottom: 5,
    fontSize: 25,
    color:'#ffffff'
  },
  textinput:{
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:20,
    marginBottom:5
  },
  textinputlarge:{
    height: 80,
    marginTop:10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:20,
    marginBottom:5  
  },
  button: {
    backgroundColor:'#607d8b',
    borderRadius: 25,
    opacity:0.9,
    width:300,
    paddingVertical:12,
},
buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
},
});