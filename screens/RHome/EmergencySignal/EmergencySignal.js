import * as React from 'react';
import { View, Text ,Button} from 'react-native';


const  EmergencySignal =() => {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginTop:30 , padding: 30 }}>
      <Button 
            title="Emergecny Signal" 
            color="#000000"
            onPress={()=>alert("Emergency Signal sent to Security,Please Be patience.!!")}>
      </Button>
    </View>
  );
}
export default EmergencySignal;