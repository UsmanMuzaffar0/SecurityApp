import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
} from 'react-native';

export default class ContactDetails extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.skyBlue}></View>
                    <View style={styles.imageWrapper}>
                        <Image style={styles.image} source={{uri: "https://pbs.twimg.com/profile_images/1006266234181210117/oedmUmVc.jpg"}} />
                        <Text style={styles.name}>Marie Lane</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#546e7a",
    },
    skyBlue: {
        backgroundColor: 'skyblue',
        height: 100,
    },
    imageWrapper: {
        alignItems: "center",
        marginTop: -75,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderWidth:5,
        borderColor: '#bdbdbd',
        borderRadius:100,
    },
    name: {
        fontSize: 40,
        color: '#bdbdbd',
    },
    metadataWrapper: {
        flexDirection: "row",
        marginBottom: 10,
    },
});