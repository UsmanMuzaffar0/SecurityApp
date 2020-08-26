import * as React from 'react';
import { View, Text,StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const  Help =() => {
  return (
    <ImageBackground 
    source={require('../../../images/sensors.jpg')}
    style={{flex:1, width:'100%', height:'100%'}}>
    <ScrollView>

    <View style={{padding:10}}>
      <Text style={{fontSize:25, fontWeight:"bold", color: 'white'}}>Help Regarding Safety Questions:</Text>
      <Text style={styles.text}>1-Are any of your valuables visible from the street?</Text>
      <Text style={styles.text1}>Residential burglaries account for nearly 75 percent of all break-ins in America. If you can see valuables inside your home from the street, so can a burglar. Burglars are notorious for “window shopping” so SafeWise encourages you to keep valuables, like cash, jewelry, electronics and guns, out of view.</Text>
      <Text style={styles.text}>2-Are your doors and windows visible from the street or from a neighbors view?</Text>
      <Text style={styles.text1}>Burglars are always looking for ways to get into your home without being seen. Overgrown shrubs give them the concealment they want to break into your home without the neighbors noticing. Keep shrubs trimmed and be sure to use the yard signs and window decals provided by your home security company to alert potential burglars that your home has help being protected.</Text>
      <Text style={styles.text}>3-Are your doors made of either solid wood or metal clad?</Text>
      <Text style={styles.text1}>Nearly one third of burglars enter a home through the front door. An old wooden door or a hollow one can be kicked in within seconds. Help beef up your home’s security by installing a windowless solid wood or metal clad door.</Text>
      <Text style={styles.text}>4-Are your entryways and pathways well lit at night?</Text>
      <Text style={styles.text1}>A dark entrance or pathway is not only a safety hazard, it’s like rolling out the welcome mat for a burglar. SafeWise encourages you to use pathway lighting and motion lighting to illuminate your home’s exterior. Some alarm monitoring providers even offer apps that let you control your home’s lighting from your smartphone.</Text>
      <Text style={styles.text}>5-Is your house number clearly visible from the street?</Text>
      <Text style={styles.text1}>When an emergency strikes, every second counts. Make sure that police, firefighters, and/or paramedics can quickly find the right house by keeping your house numbers visible. SafeWise advises checking your house numbers quarterly to ensure they haven’t faded or been obstructed by vegetation.</Text>
    </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  text: {
    fontSize:20,
    fontWeight:"bold",
    color:'#ffffff'
  },
  text1: {
    fontSize:15,
    color:'#ffffff'
    
  }
})

export default Help;