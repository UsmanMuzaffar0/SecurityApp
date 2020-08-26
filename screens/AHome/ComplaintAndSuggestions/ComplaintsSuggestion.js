import React, { Component } from 'react';
import { View, Text,SafeAreaView,StyleSheet,Button, ImageBackground } from 'react-native';


function Separator() {
  return <View style={styles.separator} />;
}

export default class  ComplaintsSuggestion extends Component {

  render(){
    return (
      <ImageBackground 
                source={require('../../../images/docs.jpg')}
                style={{flex:1, width:'100%', height:'100%'}}>
      <SafeAreaView style={styles.container}>
        <View style = {{ marginTop: 30}}>
          <Button 
            title="Complaints List"
            onPress={() => this.props.navigation.navigate('Complaints')}
          />
        <Separator />
        <Button
            title="Suggestions List"
            onPress={() => this.props.navigation.navigate('Suggestions')}
          />
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
