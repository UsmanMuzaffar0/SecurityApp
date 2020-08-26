import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView ,TouchableOpacity,FlatList, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import { ip } from '../../../components/Context';


export default class Suggestions extends Component{

    constructor(props){
        super(props)
        this.state = {
            apiData: [],
            id: '' 

       }
    //    this.id= null;
    }
    DeleteSuggestion = () =>{
         const {id} = this.state;
        fetch(ip+':9090/rsuggestion/' + (this.state.id),{
            method: 'DELETE'
        }).then((res)=> {
            console.log(res.rows)
        }).done();
            this.id= null;
        Toast.show('Suggestion Deleted!',Toast.LONG);
    }

    
    ViewSuggestion = () =>{
        fetch(ip+':9090/rsuggestion',{
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
                    <View style={{backgroundColor:'#546e7a',padding:10,margin:10, opacity:0.8}}>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>id: {jsonData.id}</Text>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Resident Name: {jsonData.name}</Text>
                        <Text style={{color:'#ffffff'}}>Ph-Number: {jsonData.phone_number}</Text>
                        <Text style={{color:'#ffffff'}}>FeedBack: {jsonData.feedback}</Text>
          
                    </View>
                </View>
            )
        });
        return(
        <ImageBackground 
            source={require('../../../images/comSuggest.jpg')}
            style={{flex:1, width:'100%', height:'100%'}}>    
        <SafeAreaView style={styles.container}>
            <View style = {{ marginTop: 20}}>
          
                <Text style ={{fontWeight: "bold",marginTop:5, fontSize:18, color:'white'}}>Enter ID: </Text>
                
                <TextInput style={styles.textinput}
                    placeholder="Enter Id of Suggestions"
                    keyboardType="phone-pad"
                    onChangeText= {id => this.setState({id}) }/>
        
        
                <View style = {{alignSelf: "center"}}>
                    <TouchableOpacity style={styles.button} onPress={this.DeleteSuggestion} >
                        <Text style={styles.buttonText}>Delete Suggestion</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{alignSelf: "center"}}>
                    <TouchableOpacity style={styles.button} onPress={this.ViewSuggestion} >
                        <Text style={styles.buttonText}>View Suggestion</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {dataDisplay}
            </ScrollView>
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
   
    textinput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        borderRadius:20,
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




// import React, { Component } from 'react';
// import { View, Text,AsyncStorage,StyleSheet, FlatList, ImageBackground } from 'react-native';
// import {ip} from '../../../components/Context';

// export default class Suggestions extends Component {

//     state = {
//         data: []
//     }

//     fetchData = async() => {
//         const response = await fetch(ip+':9090/rsuggestion');
//         const rsuggestions = await response.json();
//         this.setState({data:rsuggestions});
//     }
//     componentDidMount(){
//         this.fetchData();
//     }
//     render(){
//         return(
//             <ImageBackground 
//                 source={require('../../../images/comSuggest.jpg')}
//                 style={{flex:1, width:'100%', height:'100%'}}>
//             <View>
//                 <FlatList
//                     data={this.state.data}
//                     keyExtractor={(item,index) => index.toString()}
//                     renderItem={({item}) =>
//                     <View style={{backgroundColor:'#546e7a',padding:10,margin:10, opacity:0.9}}>
//                         <Text style={{color:'#ffffff', fontWeight:'bold',}}>Resident Name: {item.name}</Text>
//                         <Text style={{color:'#ffffff'}}>Ph-Number: {item.phone_number}</Text>
//                         <Text style={{color:'#ffffff'}}>FeedBack: {item.feedback}</Text>
//                     </View>
//                     } />
//             </View>
//             </ImageBackground>
//         );
//     }
// }