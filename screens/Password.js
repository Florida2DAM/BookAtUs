import React, { Component } from 'react';
import { View, Button, Text, StatusBar, } from 'react-native';
import {
    Input,
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export class Password extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
                <ScrollView>
                    <StatusBar barStyle="white-content" />
                    <View style={{ margin: 50 }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333', flex: 0.55, marginBottom: 50 }}> Don't you remember your password? </Text>
                        <View style={{ flex: 1, marginBottom: 50 }}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 18, textAlign: 'center', color: '#333333', flex: 0.55, marginBottom: 50 }}> Write your email and we will send you the instructions to create a new one </Text>
                            <Input
                                placeholder='Email'
                                leftIcon={{ name: 'mail' }}
                            />
                        </View>
                        <Button title='Send' onPress={() => this.props.navigation.navigate('Login')} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}