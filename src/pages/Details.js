import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DetailsScreen extends Component {

     static navigationOptions = ({ navigation, navigationOptions }) => {
         const { params } = navigation.state;
         return {
             title: params ? params.item.nome : ' tela de Detalhes ',
         }
     };
    render() {

        const { params } = this.props.navigation.state;

        console.log(params);

        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Card
                    title={'Detalhes do Contatos'}>
                    <Image source={{uri:params.item.img}}
                         style={{width: 100, height: 100, alignSelf: 'center'}}
                    />
                    <View flexDirection='row'>
                        <Text style={{ marginBottom: 10, fontSize: 20 }}>
                            Key: {params.item.key}
                        </Text>
                    </View>

                    <Text style={{ marginBottom: 10, fontSize: 20 }}>
                        Nome: {params.item.nome}
                    </Text>
                    <Text style={{ marginBottom: 10, fontSize: 20 }}>
                        Idade: {params.item.idade}
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Button
                    style={{ flex: 4 }}
                    title="Vá para Home"
                    onPress={() => this.props.navigation.navigate('home')}
                />
                <Button
                    style={{ flex: 4 }}
                    title="Voltar"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    style={{ flex: 4 }}
                    title="Outro details aninhado"
                    onPress={() => this.props.navigation.push('details', {
                        itemId: 100,
                        otherParam: 'usuario',
                    })}
                />
                <Button
                    style={{ flex: 4 }}
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: 'Updated!', itemId: 200 })}
                />
            </View>
        );
    }
}