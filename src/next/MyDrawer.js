import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';

export default class MyDrawer extends Component {
    openMenu() {
        this.drawer.open();
    }
    render() {
        const MenuView = (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                <Text>MENU View</Text>
            </View>
        );
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={MenuView}
                openDrawerOffset={0.2}
                tapToClose
            >
                <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                    <Text>Main View</Text>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>OPEN</Text>
                    </TouchableOpacity>
                </View>
            </Drawer>
        );
    }
}
