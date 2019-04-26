import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigator from '../Navigation/DrawerNavigator'


import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';


const AppSwitchNavigator = createSwitchNavigator({
    home: {screen: DrawerNavigator},
    login: {screen: Login},
    cadastrar: {screen: Cadastrar},
});

export default createAppContainer(AppSwitchNavigator);