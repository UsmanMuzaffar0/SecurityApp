import React, {Component} from 'react';
import { View, Text , ActivityIndicator, StyleSheet, ImageBackground} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class EmergencySignal extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      apiData: []
    }
  }

  componentDidMount() {
      return fetch('https://api.thingspeak.com/channels/1121453/feeds.json?results=1', )
             .then ( ( response) => response.json())
             .then( (responseJson) => {
                
              this.setState({
                isLoading: false,
                dataSource: responseJson.feeds,
              })
              
             })
             .catch((error) =>{
               console.log(error);
             });
             
  }

  ViewRecordSensors = () =>{
    return fetch('https://api.thingspeak.com/channels/1121453/feeds.json', )
             .then ( ( response) => response.json())
             .then( (responseJson) => {
                
              this.setState({
                
                apiData: responseJson.feeds,
                
              })
              
             })
             .catch((error) =>{
               console.log(error);
             });
    
}
  
  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }else{
      let feeds = this.state.dataSource.map((val, key) =>{
      
        if (val.field1 == null && val.field2 == '0') 
        {
            return <View key={key} style={styles.item}>
                  <Text style={{fontSize:60, flex:1, marginTop:10}}>
                      No Issue
                  </Text>
                  </View>
        }else if (val.field1 == '0' && val.field2 == null) 
        {
            return <View key={key} style={styles.item}>
                  <Text style={{fontSize:60, flex:1, marginTop:10}}>
                      No Issue
                  </Text>
                  </View>
        }else if (val.field1 == null && val.field2 == null) 
        {
            return <View key={key} style={styles.item}>
                  <Text style={{fontSize:60, flex:1, marginTop:10}}>
                      Sensors are not in working Condition!
                  </Text>
                  </View>
        }
        else if(val.field2 == 1)
        {
            alert("SomeOne is here, Motion detected: "+val.field2);
        }else if (val.field1 >= 20 ) 
        {   
            alert("Smoke Detected, Danger!!! " );
        }
      });

      const data = this.state.apiData;
        let dataDisplay = data.map(function(jsonData){
            return(
                <View key={jsonData.id}>
                    <View style={{backgroundColor:'#546e7a',padding:10,margin:10, opacity:0.8}}>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Id: {jsonData.entry_id}</Text>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Gas Value: {jsonData.field1}</Text>
                        <Text style={{color:'#ffffff'}}>PIR Motion Value: {jsonData.field2}</Text>
                        <Text style={{color:'#ffffff'}}>Time: {jsonData.created_at}</Text>
                       
                    </View>
                </View>
            )
        });

      return(
        <ImageBackground 
                source={require('../../../images/sensors.jpg')}
                style={{flex:1, width:'100%', height:'100%'}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={ this.ViewRecordSensors} >
                <Text style={styles.buttonText}>View Sensors Records</Text>
                </TouchableOpacity>
          {feeds}
          <ScrollView>
            {dataDisplay}
          </ScrollView>
          
        </View>
        </ImageBackground>
      );
    }
 
}
}

const styles = StyleSheet.create ({
  container: {
    flexGrow: 1,
      alignItems:'center'
    
  },
  item: {
    flex: 1,

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
    marginTop:20
}
})
