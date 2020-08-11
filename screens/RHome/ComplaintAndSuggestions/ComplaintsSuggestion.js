import React, { Component } from 'react';
import { View, Text,SafeAreaView,StyleSheet,Button } from 'react-native';


function Separator() {
  return <View style={styles.separator} />;
}

export default class  ComplaintsSuggestion extends Component {

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{ marginTop: 30}}>
          <Button 
            title="For Complaints"
            onPress={() => this.props.navigation.navigate('Complaints')}
          />
        <Separator />
        <Button
            title="For Suggestions"
            onPress={() => this.props.navigation.navigate('Suggestions')}
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
