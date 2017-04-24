import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Weather from './components/Weather';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return <Weather />;
    }
}
