import React, { Component } from 'react';
import { View, Button, Text, StatusBar, } from 'react-native';
import {
    Input, Image
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
export class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            correo: 'bookatus@hotmail.com'
        };
    }
    render() {
        const handleEmailPress = async () => {
            await Linking.openURL("mailto:" + this.state.correo + "?subject=ChangePassword&body=" + this.state.body);
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1D263B', alignItems: 'center', alignContent: 'center' }}>
                <ScrollView>
                    <StatusBar barStyle="white-content" />
                    <View style={{ margin: 50 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={{ uri: 'https://i.imgur.com/F0krMFp.png' }} style={{ width: 500, height: 225, marginBottom: 20, borderRadius: 20 }} />
                        </View>
                        <View style={{ flex: 1, marginBottom: 50 }}>
                            <Text style={{ fontFamily: 'Arial', fontSize: 18, textAlign: 'center', color: '#BFD7EA', flex: 0.55, marginBottom: 50 }}> Write your email and we will send you the instructions to create a new one </Text>
                            <Input
                                onChangeText={(e) => this.setState({body: e })}
                                style={{ color: '#BFD7EA' }}
                                placeholderTextColor='#9F84BD'
                                placeholder='Email'
                                leftIcon={{ name: 'mail', color: '#9F84BD' }}
                            />
                        </View>
                        <Button title='Send' onPress={() => handleEmailPress()} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}