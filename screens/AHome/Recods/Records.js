import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import {ip} from '../../../components/Context';

export default class Records extends Component {
    

    state = {
        data: [],
        quantity: 0
    }

    fetchData = async() => {
        const response = await fetch(ip+':9090/getUserRecords');
        const records = await response.json();
        this.setState({data: records});
    }
    componentDidMount(){
        this.fetchData();
    }

    render(){
        const {quantity} = this.state.quantity;
        return(
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) =>
                    <View style={{backgroundColor:'#546e7a',padding:10,margin:10}}>
                        <Text style={{color:'#ffffff', fontWeight:'bold',}}>Name: {item.name}</Text>
                        <Text style={{color:'#ffffff'}}>Ph-Number: {item.phone_number}</Text>
                        <Text style={{color:'#ffffff'}}>Role: {item.role}</Text>
                    </View>
                    } />
            </View>
        );
    }
}