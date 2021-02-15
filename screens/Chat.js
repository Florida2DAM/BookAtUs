import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  View,
  FlatList,
  TextInput
} from 'react-native';

import { Message } from '../components/Message';

import { Button, Icon } from 'react-native-elements';

import axios from "axios";

export class Chat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chats: [],
      username: ''
    }
  }

  currentMsg = "";

  uploadNewMsg = () => {
    if (this.currentMsg != "") {
      axios.put('http://100.25.140.168:7010/api/Chat?chatId=' + this.props.route.params.chatid, { MessageId: null, User: this.state.username, Body: this.currentMsg }).then(res => {
        if (res.data) {
          this.textInput.clear();
          this.getChatData();
        } else {
          console.log('Error while sending data to the server');
        }
      }
      ).catch(err => {
        alert(err)
      })
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => { this.getChatData() }, 1000);
    this.setState({ username: this.props.route.params.username });
    this.getChatData();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getChatData = () => {
    axios.get('http://100.25.140.168:7010/api/Chat?chatId=' + this.props.route.params.chatid).then(res => {
      if (res.data != []) {
        this.setState({ chats: res.data.Messages.reverse() });
      } else {
        console.log('Any data found: ' + res.data);
      }
    }
    ).catch(err => {
      alert(err)
    })
  }

  render() {
    const username = this.props.route.params.username;
    return (
      <View style={{ flexDirection: 'column', height: '100%' }}>
        <FlatList
          data={this.state.chats}
          keyExtractor={(item, index) => index.toString()}
          style={{ padding: 5, flex: 2, backgroundColor: 'white' }}
          inverted={true}
          renderItem={(item) => (<Message message={item} currentUser={username} />)}
        />
        <View style={{ height: 50, backgroundColor: 'lightgrey', flexDirection: 'row' }}>
          <TextInput
            placeholder='Write a message'
            onChangeText={text => this.currentMsg = text}
            style={{ flex: 1 }}
            ref={input => { this.textInput = input }}
          />
          <Button
            onPress={() => { this.uploadNewMsg() }}
            icon={
              <Icon name="chat" type size={33} color="#ffffff"></Icon>
            }
          />
        </View>
      </View>
    );
  }
};