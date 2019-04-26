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
            Text_Holder_1: '',
            Text_Holder_2: '',
            Text_Holder_3: '',
            Text_Holder_4: ''
        }
    }

    getTextInputValue = () => {
        /* this.setState({ Text_Holder_2: this.state.Text_Holder_1 }); */
        Alert.alert(this.state);
    }

    render() {

        return (
            
            <View style={styles.MainContainer}>
                <View style={{width: '100%'}}>
                <TextInput
                    style={styles.TextInputStyle}
                    onChangeText={(text) => this.setState({ Text_Holder_1: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Adicione URL para Gerar o QR Code"
                />
                <TextInput
                    style={styles.TextInputStyle}
                    onChangeText={(text) => this.setState({ Text_Holder_2: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Adicione URL para Gerar o QR Code"
                />
                <TextInput
                    style={styles.TextInputStyle}
                    onChangeText={(text) => this.setState({ Text_Holder_3: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Adicione URL para Gerar o QR Code"
                />
                <TextInput
                    style={styles.TextInputStyle}
                    onChangeText={(text) => this.setState({ Text_Holder_4: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Adicione URL para Gerar o QR Code"
                />
                <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button} >

                    <Text style={styles.TextStyle}> Click aqui para Gerar QR Code </Text>

                </TouchableOpacity>
                </View>
                <View>
                    {this.state.Text_Holder_2 ? <QRCode
                        value={this.state.Text_Holder_2}
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
        width: '100%',
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