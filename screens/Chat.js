import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView
} from 'react-native';

import {Button, Input, CheckBox, Icon} from 'react-native-elements';

const bubbleMsgLeft = (message) => {
    return (
        <View>
            <Text style={{backgroundColor: 'grey', borderRadius: 50, width: '50%', margin: 10, padding: 5, }}>{message}</Text>
        </View>
        );
}

const bubbleMsgRight = (message) => {
    return (
        <View style={{marginBottom: 5}}>
            <Text style={{backgroundColor: 'grey', borderRadius: 50, width: '50%', margin: 10, padding: 5, marginBottom: 5}}>{message}</Text>
        </View>
        );
}

export class Chat extends Component {
    state={}
    render() {
        return (
            <View style={{flex: 1, flexDirection:'column',backgroundColor: 'red', alignItems: 'center', alignContent: 'center', height: '100%'}}>
                <View style={{flex: 10, height: '100%', width: '100%', backgroundColor: 'green'}}>
                    {bubbleMsgRight("Yes, working as expected")}
                </View>
                
                
                <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center'}}>
                    <Input containerStyle={{flex: 7, backgroundColor: 'skyblue'}}></Input>
                    <View>
                    <Button
                        icon={
                            <Icon
                            name='paper-plane-o'
                            type='font-awesome'
                            size={45}
                            color="white"
                            />
                        }
                        />
                    </View>
                </View>
            </View>    
        );
    }
};
