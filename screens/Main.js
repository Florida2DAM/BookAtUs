import 'react-native-gesture-handler';
import React, { Component } from 'react';



import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button} from 'react-native-elements'

export class Main extends Component {
  render() {
    return (
        <View>
          <StatusBar barStyle="dark-content" />
          <View >
              <Text> Main </Text>
          </View>
        </View>
    );
  }
};