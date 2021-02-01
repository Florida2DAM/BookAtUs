import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla3 } from './Pantalla3';

import {
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { Button } from 'react-native-elements'


export class Pantalla1 extends Component {



    render() {
        return (
            <View style={styles.contenidor}>
                <StatusBar barStyle="dark-content" />
                <View style={{margin:5}}>
                    <Text> Pantalla 1 </Text>
                    <Button title='Pantalla 3' onPress={()=>this.props.navigation.navigate('Pantalla 3',{nom:'Manel',modul:'DIN', hores:120})} />
                    <Button title='Enrere' onPress={()=>this.props.navigation.goBack()} />
                </View>
            </View>



        );
    }
};

const styles = StyleSheet.create({
    contenidor: {
        backgroundColor: 'red',
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

export default Pantalla1;
