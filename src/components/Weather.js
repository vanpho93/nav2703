import React, { Component } from 'react';
import { View } from 'react-native';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { city: 'Saigon' };
    }

    changeCity(city) {
        this.setState({ city });
    }

    render() {
        const { city } = this.state;
        return (
            <View style={{ backgroundColor: '#B7B7B7', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <WeatherForm onChangeCity={this.changeCity.bind(this)} />
                <WeatherMessage city={city} />
            </View>
        );
    }
}
