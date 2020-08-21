import React, { Component, useEffect,useState, useRef } from 'react';
import { View, Text} from 'react-native';
import io from "socket.io-client";
import context, { ip } from "../../../components/Context";
import { GiftedChat } from 'react-native-gifted-chat';
import JoinScreen from "./JoinScreen";

export default function Chat() {
    
     //receives multiple msgs in array
    const [receiveMessage, setReceiveMessage]= useState([]);
    const [hasJoined, setHasJoined] = useState(false);
    const socket = useRef(null);
    
    useEffect(function(){
        socket.current = io(ip+":3001");
        //receiving messages
        socket.current.on("message", message => {
            setReceiveMessage(prevState => GiftedChat.append( prevState, message));
        }); 
        
    },[]);

    const onSend = (messages) => {
        console.log(messages);
        socket.current.emit("message", messages[0].text);
        setReceiveMessage(prevState => GiftedChat.append(prevState, messages)); 
    };

    const joinChat = username => {
        socket.current.emit("Join", username);
        setHasJoined(true);
    }
    
        return(
        <View style = {{flex: 1}}>
            {hasJoined ? (
            <GiftedChat
                renderUsernameOnMessage
                messages={receiveMessage}
                onSend={messages => onSend(messages)}
                user={{
                _id: 1, 
                }}
            />) : (<JoinScreen joinChat={joinChat} />)}
            
        </View>
        );
}