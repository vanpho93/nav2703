import React, { Component } from 'react';
import { View } from 'react-native';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            city: null, 
            temp: null,
            isLoading: false 
        };
    }

    changeCity(city) {
        this.setState({ city });
    }

    changeTemp(temp) {
        this.setState({ temp });
    }

    toggleIsLoading() {
        this.setState({ isLoading: !this.state.isLoading });
    }

    render() {
        const { city, temp, isLoading } = this.state;
        return (
            <View style={{ backgroundColor: '#B7B7B7', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <WeatherForm 
                    onChangeCity={this.changeCity.bind(this)} 
                    onChangeTemp={this.changeTemp.bind(this)}
                    onToggle={this.toggleIsLoading.bind(this)} 
                />
                <WeatherMessage city={city} temp={temp} isLoading={isLoading} />
            </View>
        );
    }
}
