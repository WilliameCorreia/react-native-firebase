import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { withNavigation } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width
const HEIGTH = Dimensions.get('window').height


class MenuDrawer extends Component {

    navlink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50 }} onPress={() => { this.props.navigation.navigate(nav) }}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.topLinks}>
                        <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <Image style={styles.img} source={require('../img/emoji.png')} />
                            </View>
                            <View style={styles.profileText}>
                                <Text style={styles.name}>Menu Drawer</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomLinks}>
                        {this.navlink('home', 'Home')}
                        {this.navlink('qrcode', 'Leitor QrCode')}
                        {this.navlink('qrcodeGenerator', 'Gerar QrCode')}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={styles.description}>Menu Tutorial</Text>
                    <Text style={styles.version}>v1.0</Text>
                </View>
            </View>

        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    link: {
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    topLinks: {
        height: 160,
        backgroundColor: 'black'
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 50
    },
    profileText: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left'
    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray'
    },
    version: {
        flex: 1,
        alignItems: 'center'
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 15
    }
});

export default withNavigation(MenuDrawer);