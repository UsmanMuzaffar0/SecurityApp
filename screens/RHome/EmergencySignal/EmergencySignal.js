import React, {Component} from 'react';
import { View, Text , ActivityIndicator, StyleSheet} from 'react-native';

export default class EmergencySignal extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
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

      return(
        <View style={styles.container}>
          {feeds}
          
        </View>
      );
    }
 
}
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
    
  },
  item: {
    flex: 1,

  }
})
