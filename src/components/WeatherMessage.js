import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WeatherMessage extends Component {
    render() {
        const { city, temp, isLoading } = this.props;
        let message = city === null ? 'Enter your city name' : `${city} is now ${temp}˚C`;
        if (isLoading) message = 'Loading, please wait!';
        return (
            <View style={{ backgroundColor: '#B7B7B7' }}>
                <Text style={{ color: '#fff', fontSize: 25 }}>{message}</Text>
            </View>
        );
    }
}
