import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Weather extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#B7B7B7' }}>
                <Text style={{ color: '#fff', fontSize: 25 }}>{this.props.city} is now {this.props.temp}˚C</Text>
            </View>
        );
    }
}
