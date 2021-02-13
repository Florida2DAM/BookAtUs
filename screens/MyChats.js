import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { ChatList } from '../components/ChatList';

import { Button, Icon } from 'react-native-elements'
import axios from "axios";

export class MyChats extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chats:
        [],
      showListSwith: false,
      username: "alexito"
    }
  }

  changeList = (ScreenSwitch) => {
    this.setState({ showListSwith: ScreenSwitch });
  }

  componentDidMount() {
    axios.get('http://100.25.140.168:7010/api/Chat?username=' +  this.state.username).then(res => {
      if (res.data != []) {
        this.setState({ chats: res.data });
        console.log('data deceived: ');
      } else {
        console.log('Any data found: ' + res.data);
        console.log('http://100.25.140.168:7010/api/Chat?username=' + this.state.username)
      }
    }
    ).catch(err => {
      alert(err)
    })
  }

  render() {

    return (
      <View style={{ flexDirection: 'column', height: '100%' }}>
        <FlatList
          data={this.state.chats}
          keyExtractor={(item, index) => index.toString()}
          style={{ padding: 5, flex: 1, backgroundColor: 'white' }}
          renderItem={(item) => (<ChatList chat={item} showswitch={this.state.showListSwith} navigation={this.props.navigation} username={this.state.username}/>)}
        />
        <View style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
          <TouchableOpacity style={{ width: '40%', marginLeft: '5%', margin: 5, borderRadius: 50, borderColor: 'skyblue', borderWidth: 3 }} onPress={() => this.changeList(true)}>
            <Icon name='down'
              type='antdesign'
              size={40}
              color='skyblue'
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '40%', marginRight: '5%', margin: 5, borderRadius: 50, borderColor: 'skyblue', borderWidth: 3 }} onPress={() => this.changeList(false)}>
            <Icon name='up'
              type='antdesign'
              size={40}
              color='skyblue'
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}; 