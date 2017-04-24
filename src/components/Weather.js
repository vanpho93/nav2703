import React, { Component } from 'react';
import { View } from 'react-native';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#B7B7B7', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <WeatherForm />
                <WeatherMessage />
            </View>
        );
    }
}
