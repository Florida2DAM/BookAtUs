import React, { Component } from 'react';
import {StyleSheet,View,Button,Text,StatusBar,} from 'react-native';
import { Input,Icon,} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Help } from './Help';

export class Profile extends Component{
    render() {
        return (
            <View style={{flex: 1, flexDirection:'column',backgroundColor: 'white', alignItems: 'center', alignContent: 'center'}}>
                <StatusBar barStyle="dark-content" />
                <View style={{margin:50}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 32, textAlign: 'center',color: '#333333',flex: 0.55}}> Log in and start discovering </Text>
                    <View style={{flex: 1}}>
                    <Input
                        placeholder='Email'
                        leftIcon={{ name: 'mail' }}
                    />
                    <Input 
                        placeholder='Password'
                        leftIcon={{ name: 'lock' }}
                    />
                    <Text style={{textAlign: 'right',fontFamily: 'Arial', fontSize: 18,color: '#169BD5'}} onPress={()=>this.props.navigation.navigate('Password')}>Don't remember your password?</Text>
                </View>
                    <Button title='Continue' onPress={()=>this.props.navigation.navigate('Help')} />
                    <Text style={{textAlign: 'center',fontFamily: 'Arial', fontSize: 18}}>You don't have an account?</Text>
                    <Text style={{textAlign: 'center',fontFamily: 'Arial', fontSize: 18,color: '#169BD5'}} onPress={()=>this.props.navigation.navigate('Register')}>Sign in</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contenidor: {
        backgroundColor: 'white',
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