import React, {Component} from 'react';
import { View, Text ,Button, ActivityIndicator, StyleSheet, FlatList} from 'react-native';

export default class EmergencySignal extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount() {
      return fetch('https://api.thingspeak.com/channels/1121453/fields/2.json', )
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
      return(
      <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) =>
                    <View style={{backgroundColor:'#546e7a',padding:10,margin:10}}>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Entry ID: {item.entry_id}</Text>
                        <Text style={{color:'#ffffff'}}>Smoke Sensing Value: {item.field1}</Text>
                        <Text style={{color:'#ffffff'}}>Motion Sensor Value in Boolean form: {item.field2}</Text>
                        <Text style={{color:'#ffffff'}}>Time of Detection:  {item.created_at}</Text>
                    </View>
                    } />
      );

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
