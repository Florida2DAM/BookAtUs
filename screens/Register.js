import 'react-native-gesture-handler';
import React, { Component } from 'react';



import {
    View,
    Text,
    StatusBar,
    ScrollView
} from 'react-native';
import axios from "axios";
import { Button, Input, CheckBox } from 'react-native-elements'
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userid : '',
          name : '',
          surname : '',
          avatar : null,
          password : '',
          birth : '',
          rating : 0,
          sells: 0,
          buys: 0,
          url: 'http://10.0.2.2:7010/api/Users',
          checked: false
        };
      }

      postuser = () => {
        const user = {
          userid: this.state.userid,
          name: this.state.name,
          surname: this.state.surname,
          avatar: this.state.avatar,
          password: this.state.password,
          birth: this.state.birth,
          rating: this.state.rating,
          sells: this.state.sells,
          buys: this.state.buys
        };
        axios.post(this.state.url, user).then(
        this.props.navigation.navigate('Main')
        ).catch(err => {
          alert(err)
        })
      }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
                    <StatusBar barStyle="dark-content" />
                    <View style={{ margin: 50 }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333' }}> Register and manage your sales </Text>
                        <View style={{ flex: 9.5 }}>
                            <Input
                                placeholder='Name'
                                leftIcon={{ name: 'person' }}
                                onChangeText={(e) => this.setState({ name: e })}
                            />
                            <Input
                                placeholder='Surname'
                                leftIcon={{ name: 'person' }}
                                onChangeText={(e) => this.setState({ surname: e })}
                            />
                            <Input
                                placeholder='Pending'
                                leftIcon={{ name: 'image' }}
                                editable={false} selectTextOnFocus={false}
                            />
                            <Input
                                placeholder='Birthday'
                                leftIcon={{ name: 'insert-invitation' }}
                                onChangeText={(e) => this.setState({ birth: e })}
                            />
                            <Input
                                placeholder='Email'
                                leftIcon={{ name: 'mail' }}
                                onChangeText={(e) => this.setState({ userid: e })}
                            />
                            <Input
                                placeholder='Password'
                                leftIcon={{ name: 'lock' }}
                                onChangeText={(e) => this.setState({ password: e })}
                            />
                            <Input
                                placeholder='Confirm Password'
                                leftIcon={{ name: 'lock' }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'left', fontFamily: 'Arial', fontSize: 14 }}>I accept the conditions of use and the basic information on data protection</Text>
                            <CheckBox
                                center
                                title='Accept'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button title='Continue' onPress={this.postuser} />
                            <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: 18 }}>Have you an account?</Text>
                            <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: 18, color: '#169BD5' }} onPress={() => this.props.navigation.navigate('Login')}>Log in</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
};