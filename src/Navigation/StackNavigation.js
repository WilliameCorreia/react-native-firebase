import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../pages/Login';
import cadastrar from '../pages/Cadastrar';
import DetailsScreen from '../pages/Details';
import HomeScreen from '../pages/HomeScreen';
/* import QRCodeScanner from '../pages/qrCode';
import qrcodeGenerator from '../pages/qrCodeGenerator' */
import Menu from '../pages/Menu';

import MenuButtom from '../pages/MenuButtom'
/* import BottomTabNavigator from '../Navigation/BottomTabNavigator' */


const StackNavigator = createStackNavigator(
    {
        /* BottomTabNavigator: {screen: BottomTabNavigator}, */
        home: {screen: HomeScreen},
        login: {screen: Login},
        cadastrar: {screen: cadastrar},
        details: {screen: DetailsScreen},
        menu: {screen: Menu},/* 
        qrcode: {screen: QRCodeScanner},
        qrcodeGenerator: {screen: qrcodeGenerator} */
    },
    {
        initialRouteName: "home", 
    }

);

export default createAppContainer(StackNavigator);