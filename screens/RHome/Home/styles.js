import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding:15,
      backgroundColor:'#546e7a',
      flex: 1,
      flexDirection: 'column',
    },
    
    row: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
    },
    widgets: {
      backgroundColor:'#29434e',
      flex:1,
      marginLeft: 10,
      marginRight: 10,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"space-between",
      elevation:10,
      shadowColor: '#bdbdbd',
      textShadowOffset: {width: 0, height:3},
      shadowOpacity: 0.1,
      shadowRadius:5,
      
    },
    text: {
      textAlign:"center",
      color:'#ffffff',
      fontSize:17,
      fontWeight:"bold",
      justifyContent:"center",
      flex:1,
      alignSelf:"center",
      marginTop:90
      
    }
  });
  
export default styles;