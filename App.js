/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button } from 'react-native-elements';
import { Login } from './screens/Login';
import { Password } from './screens/Password';
import { Main } from './screens/Main';
import { Register } from './screens/Register';
import { Profile } from './screens/Profile';
import { EditProfile } from './screens/EditProfile';
import { AddBook } from './screens/AddBook';
import { BookInfo } from './screens/BookInfo';
import { BookList } from './screens/BookList';
import { Chat } from './screens/Chat';
import { Favorites } from './screens/Favorites';
import { MyAds } from './screens/MyAds';
import { Help } from './screens/Help';
import {   
  Input,Icon,
  } from 'react-native-elements';



const pilaNavegacio = createStackNavigator();

export class App extends Component {
  
}

export default App;