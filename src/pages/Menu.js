import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Menu extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
          title: ' teste de menu ',
        };
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{flexDirection: 'row'}}>
                    <Button
                        buttonStyle={styles.button}
                        title="Lista de objetos"
                        type="outline"
                        onPress={() => this.props.navigation.navigate('home')}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Leitor QrCode"
                        type="outline"
                        onPress={() => this.props.navigation.navigate('qrcode')}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button
                        buttonStyle={styles.button}
                        title="Gerar QrCode"
                        type="outline"
                        onPress={() => this.props.navigation.navigate('qrcodeGenerator')}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Item"
                        type="outline"
                        onPress={() => this.state}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button
                        buttonStyle={styles.button}
                        title="Item"
                        type="outline"
                        onPress={() => this.state}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Item"
                        type="outline"
                        onPress={() => this.state}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 100,
        margin: 10
    }
});