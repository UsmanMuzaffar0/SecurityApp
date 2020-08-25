import React, { Component } from 'react';
import { View, Text,SafeAreaView,StyleSheet,Button } from 'react-native';


function Separator() {
  return <View style={styles.separator} />;
}

export default class  Communications extends Component {

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style = {{ marginTop: 30}}>
          <Button 
            title="Contacts"
            onPress={() => this.props.navigation.navigate('Contact')}
          />
        <Separator />
        <Button
            title="Message"
            onPress={() => this.props.navigation.navigate('Sms')}
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
