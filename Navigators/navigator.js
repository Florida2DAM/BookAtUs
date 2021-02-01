import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Main from '../screens/Main';

const Stack = createStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='login'
            component={Login}
            />
            <Stack.Screen
            name='main'
            component={Main}
            />
        </Stack.Navigator>
    )
}