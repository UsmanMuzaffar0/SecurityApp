import React, {Component} from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';


export default class IntrusionSensor extends React.Component {
 state={
   slidevalue: 0
  }
  render(){
    return(
      <View style={styles.container} >
        <Text style={{fontSize:16, fontWeight: "bold",marginBottom:100}}>
          You can set the Sensitivity level of Intrusion Sensor by sliding the Bar:{"\n"}
          0. means no sensitivity{"\n"}
          50. means Big object detection{"\n"}
          100. means Small object detection
        </Text>
        <Text style={styles.txt}>{this.state.slidevalue}</Text>
        <Slider  style={{width:'80%'}} step={1} maximumValue={100} value={this.state.slidevalue} onValueChange={(slidevalue) =>this.setState({slidevalue})}   />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    alignItems:"center",
    backgroundColor: '#f5fCff'
  },
  txt:{
    textAlign: "center",
    fontWeight:"bold",
    marginBottom: 5,
    fontSize: 20
  },
});


