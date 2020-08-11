import {
    StyleSheet
  } from 'react-native';

const styles= StyleSheet.create({
    container: {
//backgroundColor : '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextCont: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:8,
      flexDirection:'row',
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
      top: {
        color:'rgba(255,255,255,0.9)',
        fontWeight:'700',
        flex:1,
        fontSize:30,
        marginTop:20,
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
