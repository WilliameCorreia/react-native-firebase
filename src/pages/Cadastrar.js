import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';

import firebase from 'react-native-firebase'

export default class Cadastrar extends Component{
    static navigationOptions = {
        title: 'Cadastro'      
    }

    state = {
        key: '',
        email: '',
        password: '',
        isAuthenticated: false,
        status: false,
    }

    NewUsuario = async () => {

        this.setState({status: true});

        console.log(this.state);

        if (!this.state.email || !this.state.password) {
            Alert.alert("Atenção", "campos Email é Senha São Obrigatórios !!! ");
            this.setState({status: false});
            return;
        }

        const { email, password } = this.state;

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).then(sucesso => {
            console.log(sucesso);
            this.setState({status: false});
            Alert.alert("Bem vindo !","Usuario cadastrado com sucesso !");
            this.props.navigation.navigate('home', { email });
        },
            error => {
                console.log(error);
                Alert.alert("Error", error.message);
                this.setState({status: false});
            }
        );

        this.setState({status: false});
    }

    render(){
        return(
            <View style={estilo.principal}>
            {this.state.status ? <ActivityIndicator size="large" color="#f4511e"/> : <ActivityIndicator animating={false}/>}
                <View style={estilo.SectionStyle}>                    
                    <Image style={estilo.ImageStyle} source={require('../img/Email_30017.png')} />
                    <TextInput 
                        value={this.state.email}  
                        style={{ flex: 1 }} 
                        placeholder="Digite seu email"
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View style={estilo.SectionStyle}>                    
                    <Image style={estilo.ImageStyle} source={require('../img/key_password_lock_800.png')} />
                    <TextInput 
                        value={this.state.password}
                        style={{ flex: 1 }} 
                        placeholder="Digite sua senha"
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <View>
                    <TouchableOpacity style={estilo.botao} onPress={this.NewUsuario}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{margin: 40}} onPress={() => this.props.navigation.navigate('login')}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    entrada: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 10
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