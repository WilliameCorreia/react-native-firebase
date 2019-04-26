import React from 'react';
import { platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Login from '../pages/Login';
import cadastrar from '../pages/Cadastrar';
import DetailsScreen from '../pages/Details';
import HomeScreen from '../pages/HomeScreen';
import Menu from '../pages/Menu';
/* import qrcodeGenerator from '../pages/qrCodeGenerator'; */
import QRCodeScanner from '../pages/qrCode';
import StackNavigation from '../Navigation/StackNavigation';
import MenuDrawer from '../pages/MenuDrawer'


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: 250,
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer/>)
    }
}

const DrawerNavigation = createDrawerNavigator(
    {
        voltar: {screen: StackNavigation},
        home: { screen: HomeScreen },
        qrcode: { screen: QRCodeScanner },
        /* qrcodeGenerator: { screen: qrcodeGenerator }, */
        menu: { screen: Menu },
        
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigation);