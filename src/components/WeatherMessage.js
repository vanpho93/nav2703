import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Weather extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#B7B7B7' }}>
                <Text style={{ color: '#fff', fontSize: 25 }}>Hanoi is now 19˚C</Text>
            </View>
        );
    }
}
