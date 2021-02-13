
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import {
    Input,
} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Password } from './Password';
import { Main } from './Main';
import { Register } from './Register';
import { Profile } from './Profile';
import { EditProfile } from './EditProfile';
import { AddBook } from './AddBook';
import { BookInfo } from './BookInfo';
import { BookList } from './BookList';
import { Chat } from './Chat';
import { MyChats } from './MyChats';
import { Favorites } from './Favorites';
import { MyAds } from './/MyAds';
import { Help } from './Help';
const Stack = createStackNavigator();
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
        }
    }

    changeLogOut = (e) => {
        this.setState({ LogIn: e }, () => {
            alert(this.state.LogIn)
            alert('User nor found')
        });
    }

    pantallaPrincipal = ({ navigation }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
                <ScrollView>
                    <StatusBar barStyle="white-content" />
                    <View style={{ margin: 50 }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333', flex: 0.55, marginBottom: 50 }}> Log in and start discovering </Text>
                        <View style={{ flex: 1 }}>
                            <Input
                                placeholder='Email'
                                textContentType='emailAddress'
                                leftIcon={{ name: 'mail' }}
                                onChangeText={e => this.setState({ Email: e })}
                            />
                            <Input
                                placeholder='Password'
                                textContentType='password'
                                leftIcon={{ name: 'lock' }}
                                onChangeText={e => this.setState({ Password: e })}
                            />
                            <Text style={{ textAlign: 'right', fontFamily: 'Arial', fontSize: 18, color: '#169BD5', marginBottom: 80 }} onPress={() => navigation.navigate('Password')}>Don't remember your password?</Text>
                        </View>

                        <Button title='Continue' onPress={() => {
                            if (this.state.Email == '' || this.state.Password == '') {
                                alert("Empty User/Password")
                                log = false
                            } else {
                                debugger;
                                fetch('http://100.25.140.168:7010/api/Login', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        Email: this.state.Email,
                                        Password: this.state.Password
                                    })
                                }).then((Response) => Response.json())
                                    .then((result) => {
                                        if (result.Status == 'Invalid') {
                                            alert('User not found')
                                        }
                                        else {
                                            navigation.navigate('Main');
                                        }
                                    })
                            }
                        }}
                        />
                        <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: 18 }}>Don't you have an account?</Text>
                        <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: 18, color: '#169BD5' }} onPress={() => { navigation.navigate('Register') }}>Sign in</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={this.pantallaPrincipal} />
                    <Stack.Screen name="Password" component={Password} />
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="AddBook" component={AddBook} />
                    <Stack.Screen name="BookInfo" component={BookInfo} />
                    <Stack.Screen name="BookList" component={BookList} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="EditProfile" component={EditProfile} />
                    <Stack.Screen name="Favorites" component={Favorites} />
                    <Stack.Screen name="MyAds" component={MyAds} />
                    <Stack.Screen name="Chat" component={Chat} />
                    <Stack.Screen name="MyChats" component={MyChats} />
                    <Stack.Screen name="Help" component={Help} />
                </Stack.Navigator>
            </NavigationContainer>
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