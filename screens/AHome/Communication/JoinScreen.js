import React, { useState } from 'react';
import {View, Text, TextInput, Image, Button} from "react-native";

export default function JoinScreen({joinChat}){
    const [username, setUsername] = useState("");
    return(
        <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
            <Image source={require('../../../images/chat-icon.png')} />
            <TextInput 
                style={{fontSize:30, marginBottom:30, textAlign:"center"}}
                placeholder="Enter Username"
                onChangeText={text => setUsername(text)}
                value={username} />
            <Button
                title="Join Admin Group"
                onPress={() => joinChat(username)}
                 />
        </View>
    );
}