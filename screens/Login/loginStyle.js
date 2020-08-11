import {
    SafereaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';

const styles= StyleSheet.create({
    container: {
     // backgroundColor : '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextCont: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:17,
      flexDirection:'row',
      marginBottom:20
    },
    signupText: {
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',

    },
    mainBack:{
      flex:1,
      width:'100%',
      height:'100%',
    },
    overlayContainer:{
      flex:1,
      backgroundColor: 'rgba(52,52,52,0.8)'
    }
   });
export default styles;