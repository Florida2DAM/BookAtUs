import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';

import { Card, Image, Input, } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import RadioButton from '../components/RadioButton';
import { Linking } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      correo: 'bookatus@hotmail.com'
    };
  }
  render() {
    const handleEmailPress = async () => {
      await Linking.openURL("mailto:" + this.state.correo + "?subject=AppProblem&body=" + this.state.body);
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1D263B', alignItems: 'center', alignContent: 'center' }}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: 'https://i.imgur.com/F0krMFp.png' }} style={{ width: 350, height: 155, marginBottom: 20, borderRadius: 20, marginTop: 10 }} />
          </View>
          <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#BFD7EA', flex: 0.55, marginBottom: 20 }}> Can we help you? </Text>
          <View>
            <Card containerStyle={{ backgroundColor: '#1D263B', borderColor: '#1D263B' }}>
              <View>
                <View style={styles.container}>
                  <RadioButton PROP={PROP} />
                </View>
              </View>
              <Input style={{ marginTop: 10, color: '#BFD7EA' }} placeholderTextColor='#BFD7EA' placeholder='Write your problem' onChangeText={(e) => { this.setState({ body: e }) }} />
            </Card>
            <View style={{ marginTop: 30, margin: 20 }}>
              <Button title='Send' onPress={() => handleEmailPress()} />
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
    justifyContent: 'center',
    backgroundColor: '#1D263B'
  }
})