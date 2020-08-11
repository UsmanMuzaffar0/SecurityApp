import React, { Component } from 'react';
import { View, Text,AsyncStorage,StyleSheet, FlatList } from 'react-native';
import {ip} from '../../../components/Context';


export default class Complaints extends Component {

    state = {
        data: []
    }

    fetchData = async() => {
        const response = await fetch(ip+':9090/rcomplaint');
        const rcomplaints = await response.json();
        this.setState({data:rcomplaints});
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) =>
                    <View style={{backgroundColor:'#546e7a',padding:10,margin:10}}>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Resident Name: {item.name}</Text>
                        <Text style={{color:'#ffffff'}}>Ph-Number: {item.phone_number}</Text>
                        <Text style={{color:'#ffffff'}}>Nature of Complaint: {item.nature}</Text>
                        <Text style={{color:'#ffffff'}}>Detail:  {item.details}</Text>
                    </View>
                    } />
            </View>
        );
    }
}