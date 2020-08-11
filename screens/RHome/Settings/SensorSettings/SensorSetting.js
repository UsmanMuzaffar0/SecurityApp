import React, {Component} from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

export default class  SensorSettings extends Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 50}}>
          <Button 
            title="FireHazard Sesnors"
            onPress={() => this.props.navigation.navigate('Firehazard')}
          />
        <Separator />
        
        <Button
            title="Intrusion Sensors"
            onPress={() => this.props.navigation.navigate('Intrusion')}
          />
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
});
