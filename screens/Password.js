import React, { Component } from 'react';
import {StyleSheet,View,Button,Text,StatusBar,} from 'react-native';
import {   
    Input,Icon,
    } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export class Password extends Component{
    render() {
        return (
            <View style={{flex: 1, flexDirection:'column',backgroundColor: 'white', alignItems: 'center', alignContent: 'center'}}>
                <StatusBar barStyle="dark-content" />
                <View style={{margin:50}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 32, textAlign: 'center',color: '#333333',flex: 0.55}}> You don't remember your password? </Text>
                    <View style={{flex: 1}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 18, textAlign: 'center',color: '#333333',flex: 0.55}}> Write your email and we will send you the instructions to create a new one </Text>
                    <Input
                        placeholder='Email'
                        leftIcon={{ name: 'mail' }}
                    />
                </View>
                    <Button title='Send' onPress={()=>this.props.navigation.navigate('Login')} />
                </View>
            </View>
        );
    }
}