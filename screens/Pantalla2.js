import 'react-native-gesture-handler';
import React, { Component } from 'react';



import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button} from 'react-native-elements'

export class Pantalla2 extends Component {
  render() {
    return (
        <View style={styles.contenidor}>
          <StatusBar barStyle="dark-content" />
          <View >
              <Text> Pantalla 2 </Text>
              
          </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    backgroundColor:'green',
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

export default Pantalla2;
