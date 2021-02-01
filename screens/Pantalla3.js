import 'react-native-gesture-handler';
import React, { Component } from 'react';



import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button} from 'react-native-elements'

export class Pantalla3 extends Component {
  render() {
    return (
        <View style={styles.contenidor}>
          <StatusBar barStyle="dark-content" />
          <View >
              <Text> Pantalla 3 </Text>
              <View>
              <Text> Nom: {this.props.route.params.nom} </Text>
              <Text> Mòdul: {this.props.route.params.modul} </Text>
              </View>
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    backgroundColor:'blue',
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    justifyContent: 'center',
    padding:5,
    margin:5,
    alignContent: 'space-around',
    alignItems:'center',
  },
  
});

export default Pantalla3;
