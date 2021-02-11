import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  View,
  FlatList,
  TextInput
} from 'react-native';

import { Message } from '../components/Message';

import {Button, Icon} from 'react-native-elements';



export class Chat extends Component {

  constructor(props){
    super(props)
    this.state={
      chats:
      [
        {MessageId:1, User: 'maboto01', Body: 'Hi! Im interested on that book, can you offer a discount?'},
        {MessageId:2, User: 'saasmu', Body: 'Yeah, if you buy 3 books or more I will give u a 10%'},
        {MessageId:3, User: 'maboto01', Body: 'Great! I will buy three books of the same writer, I really like J.K Rowling books :)'},
        {MessageId:4, User: 'saasmu', Body: 'Im agree, is my fav writer. In florida @ 11?'},
        {MessageId:5, User: 'maboto01', Body: 'Sure, see u there :)'}
      ]
    }
  }

  currentMsg = "";

  uploadNewMsg = () => {
    if (this.currentMsg != "") {
      const currentUser = "maboto01";
      const msgId = this.state.chats.length + 1;
      const updateChat = this.state.chats;
      updateChat.push({MessageId:msgId, User: currentUser, Body: this.currentMsg})
      this.setState({chats: updateChat});
      this.currentMsg = "";
      this.textInput.clear();
    }
  }

  render() {
    return (
        <View style={{flexDirection: 'column', height: '100%'}}>
          <FlatList
           data={this.state.chats} 
           keyExtractor={(item, index)=>index.toString()}
           style={{padding:5, flex: 2, backgroundColor: 'white'}}
           renderItem={(item)=>(<Message message={item}/>  )}
           />
            <View style={{height: 50, backgroundColor: 'lightgrey', flexDirection: 'row'}}>
              <TextInput
              placeholder='Write your msg'
              onChangeText={text => this.currentMsg = text}
              style={{flex: 1}}
              ref={input => { this.textInput = input }}
              />
              <Button
              onPress={() => {this.uploadNewMsg()}}
              icon={
                <Icon name="chat" type size={33} color="#ffffff"></Icon>
              }
              />
            </View>
        </View>
    );
  }
};