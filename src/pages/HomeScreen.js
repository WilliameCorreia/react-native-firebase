import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, Image, FlatList, TouchableOpacity } from 'react-native';

import { Card, ListItem, Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import MenuButtom from '../pages/MenuButtom';

import { withNavigation } from 'react-navigation';

class HomeScreen extends Component {

      static navigationOptions = ({ navigation, navigationOptions }) => {
         return {
             title: ' Home ',
             headerLeft: <MenuButtom navigation={navigation}/>            
         };
     }; 

    async componentDidMount() {
        
        this.listar();

        /* firebase.database().ref('users').push({
            id: "04",
            nome: 'Gabriele',
            idade: 8
        }); */
    }


    async listar() {
        console.log('entrou aqui');
        try {
            let dados = await firebase.database().ref('users').on('value', (data) => {
                let Obj = data.val();
                let array = Object.entries(Obj).map(item => ({...item[1], key: item[0]}));
                console.log(array);
                this.setState({array});
            });
        } catch (error) {
            console.log(error);
        } 
    };

    render() {

        //const navigate = this.props.navigation.state;

        //console.log(params)

        return (
            <View>
            {!this.state ? <ActivityIndicator/> :  
                <FlatList
                    data = {this.state.array}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) =>
                        <Card
                            title={item.nome} style={{ width: 50 }}>
                            <Text style={{ marginBottom: 10 }}>
                                NOME: {item.nome}
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#f4511e'
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='Detalhes'
                                onPress={() => this.props.navigation.navigate('details',{item})}
                            />
                        </Card>}
                />
            }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default withNavigation(HomeScreen)