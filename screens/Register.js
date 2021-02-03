import 'react-native-gesture-handler';
import React, { Component } from 'react';



import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView
} from 'react-native';

import {Button, Input, Icon, CheckBox} from 'react-native-elements'

export class Register extends Component {
    state={checked: false}
  render() {
    return (
        <ScrollView>
        <View style={{flex: 1, flexDirection:'column',backgroundColor: 'white', alignItems: 'center', alignContent: 'center'}}>
                <StatusBar barStyle="dark-content" />
                <View style={{margin:50}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 32, textAlign: 'center',color: '#333333'}}> Register and manage your sales </Text>
                    <View style={{flex: 9.5}}>
                    <Input 
                        placeholder='Name'
                        leftIcon={{ name: 'person' }}
                    />
                    <Input 
                        placeholder='Surname'
                        leftIcon={{ name: 'person' }}
                    />
                    <Input 
                        placeholder='Pending'
                        leftIcon={{ name: 'image' }}
                        editable={false} selectTextOnFocus={false}
                    />
                    <Input 
                        placeholder='Birthday'
                        leftIcon={{ name: 'insert-invitation' }}
                    />
                    <Input 
                        placeholder='Email'
                        leftIcon={{ name: 'mail' }}
                    />
                    <Input 
                        placeholder='Password'
                        leftIcon={{ name: 'lock' }}
                    />
                    <Input 
                        placeholder='Confirm Password'
                        leftIcon={{ name: 'lock' }}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'left',fontFamily: 'Arial', fontSize: 14}}>I accept the conditions of use and the basic information on data protection</Text>
                    <CheckBox
                        center
                        title='Accept'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                    />
                    </View>
                    <View style={{flex: 1}}>
                    <Button title='Continue' onPress={()=>this.props.navigation.navigate('Main')} />
                    <Text style={{textAlign: 'center',fontFamily: 'Arial', fontSize: 18}}>You have an account?</Text>
                    <Text style={{textAlign: 'center',fontFamily: 'Arial', fontSize: 18,color: '#169BD5'}} onPress={()=>this.props.navigation.navigate('Login')}>Log in</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
    );
  }
};