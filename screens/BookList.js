import React, { Component } from 'react';
import {StyleSheet,View,Button,Text,StatusBar,} from 'react-native';
import {   
    Input,Icon, Card, Image,
    } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Password } from './Password';
import { ScrollView } from 'react-native-gesture-handler';

export class BookList extends Component{
    render() {
        return (
            <ScrollView>
            <View style={{flex: 1, flexDirection:'column',backgroundColor: 'white', alignItems: 'center', alignContent: 'center'}}>
                <StatusBar barStyle="dark-content" />
                <View style={{margin:50}}>
                    <Text style={{fontFamily: 'Arial', fontSize: 32, textAlign: 'center',color: '#333333',flex: 0.20}}> Book Categories </Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Card containerStyle={{width: 175}}>
                    <Button title='Fantasy' onPress={()=>this.props.navigation.navigate('BookInfo')} />
                    <Image source={{ uri: 'https://i.imgur.com/BiKQwmUs.jpg' }} style={{ width: 143, height: 130 }} onPress={()=>this.props.navigation.navigate('BookInfo')}></Image>
                    </Card>
                    <Card containerStyle={{width: 175}}>
                    <Button title='Mystery' onPress={()=>this.props.navigation.navigate('BookInfo')} />
                    <Image source={{ uri: 'https://i.imgur.com/htzIa7fs.jpg' }} style={{ width: 143, height: 130 }} onPress={()=>this.props.navigation.navigate('BookInfo')}></Image>
                    </Card>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                        <Card containerStyle={{width: 175}}>
                    <Button title='Studies' onPress={()=>this.props.navigation.navigate('BookInfo')} />
                    <Image source={{ uri: 'https://i.imgur.com/Vaxo1Kos.jpg' }} style={{ width: 143, height: 130 }} onPress={()=>this.props.navigation.navigate('BookInfo')}></Image>
                    </Card>
                    <Card containerStyle={{width: 175}}>
                    <Button title='Romance' onPress={()=>this.props.navigation.navigate('BookInfo')} />
                    <Image source={{ uri: 'https://i.imgur.com/pWuhhh2s.jpg' }} style={{ width: 143, height: 130 }} onPress={()=>this.props.navigation.navigate('BookInfo')}></Image>
                    </Card>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                        <Card containerStyle={{width: 175}}>
                    <Button title='Light novel' onPress={()=>this.props.navigation.navigate('BookInfo')} />
                    <Image source={{ uri: 'https://i.imgur.com/5jjnXtzs.jpg' }} style={{ width: 143, height: 130 }} onPress={()=>this.props.navigation.navigate('BookInfo')}></Image>
                    </Card>
                    <Card containerStyle={{width: 175}}>
                    <Button title='Dark novel' onPress={()=>this.props.navigation.navigate('BookInfo')} />
                    <Image source={{ uri: 'https://i.imgur.com/gtxJeHys.jpg' }} style={{ width: 143, height: 130 }} onPress={()=>this.props.navigation.navigate('BookInfo')}></Image>
                    </Card>
                </View>
                </View>
            </View>
            </ScrollView>
        );
    }
}