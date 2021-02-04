import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text,
} from 'react-native';

import { Card, CheckBox, Image, Input, } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton from '../components/RadioButton';
const PROP = [
  {
    key: 'errors',
    text: 'Report errors',
  },
  {
    key: 'account',
    text: 'Problems with your Account',
  },
  {
    key: 'users',
    text: 'Problems with users',
  },
  {
    key: 'suggestions',
    text: 'Suggestions',
  },
];

export class Help extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: 'https://i.imgur.com/DTWszbP.png' }} style={{ width: 350, height: 130, marginBottom: 20, borderRadius: 20 }} />
          </View>
          <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333', flex: 0.55, marginBottom: 20 }}> Can we help you? </Text>
          <View>
            <Card>
              <View>
                <View style={styles.container}>
                  <RadioButton PROP={PROP} />
                </View>
              </View>
              <Input style={{ marginTop: 10 }} placeholder='Write your problem' />
            </Card>
            <View style={{ marginTop: 30, margin: 20 }}>
              <Button title='Send' onPress={() => this.props.navigation.navigate('Profile')} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})