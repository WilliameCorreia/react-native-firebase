import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';
import settings from '../pages/Settings'

const BottomNavigator = createBottomTabNavigator({
    Feed,
    Profile,
    settings,
});

export default createAppContainer(BottomNavigator);