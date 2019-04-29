import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

import QRCode from 'react-native-qrcode';

export default class QrCodeGenerator extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: ' Gerar QrCode ',
        };
    };

    constructor() {
        super();
        this.state = {
            id: '',
            professor: '',
            sala: '',
            curso: '',
            status: false
        }
    }

    getTextInputValue = () => {
        this.setState(
        { 
            id: this.state.id,
            professor: this.state.professor,
            sala: this.state.sala,
            curso: this.state.curso,
            status: true
        }
        );
        Alert.alert(JSON.stringify(this.state));
    }

    render() {

        return (

            <View style={styles.MainContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={styles.TextInputStyle}
                        onChangeText={(text) => this.setState({ id: text })}
                        underlineColorAndroid="transparent"
                        placeholder="ID"
                    />
                    <TextInput
                        style={styles.TextInputStyle}
                        onChangeText={(text) => this.setState({ professor: text })}
                        underlineColorAndroid="transparent"
                        placeholder="Professor"
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={styles.TextInputStyle}
                        onChangeText={(text) => this.setState({ sala: text })}
                        underlineColorAndroid="transparent"
                        placeholder="Sala"
                    />
                    <TextInput
                        style={styles.TextInputStyle}
                        onChangeText={(text) => this.setState({ curso: text })}
                        underlineColorAndroid="transparent"
                        placeholder="Curso"
                    />
                </View>
                <View style={{width: '100%'}}>
                <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button} >
                        <Text style={styles.TextStyle}> Click aqui para Gerar QR Code </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.state.status ?
                        <QRCode
                            value={JSON.stringify(this.state)}
                            size={250}
                            bgColor='#000'
                            fgColor='#fff'
                        /> : false}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    TextInputStyle: {
        width: '50%',
        margin: 4,
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F44336',
        textAlign: 'center'
    },
    button: {
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#009688',
        borderRadius: 7,
        marginBottom: 20
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    }
});