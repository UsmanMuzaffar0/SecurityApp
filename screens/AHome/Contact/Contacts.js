import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import contactStyle from './contactStyle';



export default class Contacts extends Component {
    constructor(){
        super();
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        this.props.navigation.navigate("ContactDetails");
    }

    drawContent(contact){
        return(
            <TouchableOpacity onPress={this.onPress}>
                <View style={contactStyle.contact}>
                        <Image style={contactStyle.image} 
                            source={{uri: "https://pbs.twimg.com/profile_images/1006266234181210117/oedmUmVc.jpg"}}/>
                        <View>
                            <Text style={contactStyle.contactName}>Marie Lane</Text>
                            <Text style={contactStyle.contactNum}>03084681397</Text>
                        </View>
                    </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View style = {contactStyle.container}>
                <ScrollView style = {contactStyle.wrapper}>
                    
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()}
                   {this.drawContent()} 
                </ScrollView>
                
                    <TouchableOpacity style={contactStyle.button} onPress={()=> {}}>
                        <Text style={contactStyle.buttonText} >Add Contact</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}