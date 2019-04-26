import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';

export default class MenuButtom extends Component {
    render() {
        return (
            <View>
                <Icon name="menu" 
                    onPress={() => this.props.navigation.toggleDrawer()}
                    size= {40}
                    containerStyle={{margin: 10}}
                    />
            </View>
        );
    }
}

