import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigator from '../Navigation/DrawerNavigator'

import AuthLoading from '../pages/AuthLoading';
import Login from '../pages/Login';
import Cadastrar from '../pages/Cadastrar';

const AppSwitchNavigator = createSwitchNavigator({
    AuthLoading: {screen: AuthLoading},
    login: {screen: Login},
    cadastrar: {screen: Cadastrar},
    DrawerNavigator: {screen: DrawerNavigator},
});

export default createAppContainer(AppSwitchNavigator);