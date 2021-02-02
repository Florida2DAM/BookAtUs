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

const pilaNavegacio = createStackNavigator();

export class App extends Component {
  
pantallaPrincipal = ({navigation}) => {return(
  <View style={styles.contenidor}>
  <StatusBar barStyle="dark-content" />
  <View>
    <Button title='Login' onPress={()=>navigation.navigate('Login')} />  
    <Button title='Register' onPress={()=>navigation.navigate('Register')} />
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