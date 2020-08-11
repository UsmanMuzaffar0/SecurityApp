import {
    StyleSheet,
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'#546e7a',
        flex: 1,
        flexDirection: 'column',
    },
    wrapper: {
        flex:1,
        marginBottom:10,
    },
    contact: {
        flexDirection:'row',
        borderWidth:1,
        borderRadius:6,
        borderColor:'grey',
        marginBottom:10,
        backgroundColor:'#29434e',
        padding:5,
    },
    contactName: {
        fontSize:20,
        fontWeight:'600',
        color:"#ffffff"
    },
    contactNum:{
        fontSize:15,
        color:"#ffffff"
    },
    image: {
        width:55,
        height:55,
        backgroundColor: 'skyblue',
        marginRight:20,
    }, 
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center',
    },
    button: {
        backgroundColor:"#1c313a",
        borderRadius:25,
        height:45,
        paddingVertical:12,
    }
});

export default styles;