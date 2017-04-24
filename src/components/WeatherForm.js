import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = { city: '' };
    }
    render() {
        return (
            <View style={{ backgroundColor: '#B7B7B7', alignItems: 'center' }}>
                <TextInput 
                    style={{ width: 300, height: 40, backgroundColor: '#fff', paddingLeft: 10 }}
                    value={this.state.city}
                    onChangeText={text => this.setState({ city: text })}
                    placeholder="Enter your city name"
                />
                <TouchableOpacity style={{ padding: 10, backgroundColor: 'lightblue', margin: 10, borderRadius: 2 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Get weather</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
