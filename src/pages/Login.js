import React, { Component } from 'react';
import {
    View, TextInput, StyleSheet, Text, Image,
    TouchableOpacity, Alert, ActivityIndicator, ScrollView
} from 'react-native';
import firebase from 'react-native-firebase';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Login',
        }
    };

    state = {
        key: '',
        email: '',
        password: '',
        isAuthenticated: false,
        status: false,
    }

    async storeData(token){
        try {
            await AsyncStorage.setItem('@storage_Key', token);
        } catch (error) {
            Alert.alert(error);
        }
    }

    login = async () => {

        this.setState({status: true});

        console.log(this.state.status);

        if (!this.state.email || !this.state.password) {
            Alert.alert("Atenção !","campos Email é Senha São Obrigatórios !!! ");
            this.setState({status: false}); 
            return;
        }

        console.log(this.state);

        const { email, password } = this.state;

        console.log(email);

        const user = await firebase.auth().signInWithEmailAndPassword(email, password).then(sucesso => {
            console.log(sucesso);
            this.setState({ isAuthenticated: true });
            const { uid } = sucesso.user;
            this.setState({status: false, key: uid});
            this.storeData(this.state.key);
            console.log(this.state);
            this.props.navigation.navigate('DrawerNavigator', { email });
        },
            error => {
                Alert.alert("Error !",error.message);
                this.setState({status: false});
            }
        );
        
    };

    render() {

        return (
            <View style={estilo.principal}>      
                
                <Image style={estilo.logo} source={require('../img/ideiaLegal.png')} />

                {this.state.status ? <ActivityIndicator size="large" color="#f4511e"/> : <ActivityIndicator animating={false}/>}

                <View style={estilo.SectionStyle}>
                    <Image style={estilo.ImageStyle} source={require('../img/Email_30017.png')} />
                    <TextInput
                        style={{ flex: 1 }}
                        textContentType={'emailAddress'}
                        underlineColorAndroid='transparent'
                        placeholder="Digite seu Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={estilo.SectionStyle}>
                    <Image style={estilo.ImageStyle} source={require('../img/key_password_lock_800.png')} />
                    <TextInput
                        textContentType={'password'}
                        style={{ flex: 1 }}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        placeholder="Senha"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={this.login} style={estilo.botao}>
                        <Text> Entrar </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={estilo.esqueceuSenha}> Esqueceu Senha </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('cadastrar')}>
                        <Text style={estilo.esqueceuSenha}> Cadastre-se </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    logo: {
        width: 200,
        height: 160,
        margin: 20
    },
    principal: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#f4511e',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    esqueceuSenha: {
        margin: 20,
        color: '#f4511e',
        backgroundColor: "transparent",
        textAlign: 'right',
        paddingRight: 0
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});