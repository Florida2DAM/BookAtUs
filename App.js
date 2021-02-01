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
import { Pantalla1} from './screens/Pantalla1';
import { Pantalla2} from './screens/Pantalla2';
import { Pantalla3} from './screens/Pantalla3';

const pilaNavegacio = createStackNavigator(); //Creem la pila de Navegació

export class App extends Component {
  
pantallaPrincipal = ({navigation}) => {return(
  <View style={styles.contenidor}>
  <StatusBar barStyle="dark-content" />
  <View>
    <Text> Pantalla inicial </Text>
    <Button title='Pantalla 1' onPress={()=>navigation.navigate('Pantalla 1')} /> 
    <Button title='Pantalla 2' onPress={()=>navigation.navigate('Pantalla 2')} /> 
  </View>
</View>
)}


  render() {
    return (
      <NavigationContainer>
        <pilaNavegacio.Navigator>
          <pilaNavegacio.Screen name="Home" component={this.pantallaPrincipal} />
          <pilaNavegacio.Screen name="Pantalla 1" component={Pantalla1} />
          <pilaNavegacio.Screen name="Pantalla 2" component={Pantalla2} />
          <pilaNavegacio.Screen name="Pantalla 3" component={Pantalla3} />
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