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




const pilaNavegacio = createStackNavigator();

export class App extends Component {
  
pantallaPrincipal = ({navigation}) => {return(
  <View style={styles.contenidor}>
  <StatusBar barStyle="dark-content" />
  <View>
    <Button title='Login' onPress={()=>navigation.navigate('Login')} />  
    <Button title='Register' onPress={()=>navigation.navigate('Register')} />
    <Button title='BookList' onPress={()=>navigation.navigate('BookList')} />
  </View>
</View>
)}


  render() {
    return (
      <NavigationContainer>
        <pilaNavegacio.Navigator>
          <pilaNavegacio.Screen name="Home" component={this.pantallaPrincipal} />
          <pilaNavegacio.Screen name="Login" component={Login} />
          <pilaNavegacio.Screen name="Password" component={Password} />
          <pilaNavegacio.Screen name="Main" component={Main} />
          <pilaNavegacio.Screen name="Register" component={Register} />
          <pilaNavegacio.Screen name="AddBook" component={AddBook} />
          <pilaNavegacio.Screen name="BookInfo" component={BookInfo} />
          <pilaNavegacio.Screen name="BookList" component={BookList} />
          <pilaNavegacio.Screen name="Profile" component={Profile} />
          <pilaNavegacio.Screen name="EditProfile" component={EditProfile} />
          <pilaNavegacio.Screen name="Favorites" component={Favorites} />
          <pilaNavegacio.Screen name="MyAds" component={MyAds} />
          <pilaNavegacio.Screen name="Chat" component={Chat} />
          <pilaNavegacio.Screen name="Help" component={Help} />
        </pilaNavegacio.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    alignContent: 'space-around',
    alignItems: 'center',
  },

});

export default App;