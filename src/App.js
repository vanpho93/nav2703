import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import MyDrawer from './next/MyDrawer';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return <MyDrawer />;
    }
}
