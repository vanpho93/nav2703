import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = { city: '' };
    }

    changeCityName() {
        const { city } = this.state;
        const { onChangeTemp } = this.props;
        this.props.onChangeCity(city);
        this.setState({ city: '' });
        const api = '01cc37655736835b0b75f2b395737694';
        const url = `http://api.openweathermap.org/data/2.5/find?units=metric&appid=${api}&q=${city}`;
        fetch(url)// eslint-disable-line
        .then(res => res.json())
        .then(resJSON => onChangeTemp(resJSON.list[0].main.temp));
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
                <TouchableOpacity onPress={this.changeCityName.bind(this)} style={{ padding: 10, backgroundColor: 'lightblue', margin: 10, borderRadius: 2 }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Get weather</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
