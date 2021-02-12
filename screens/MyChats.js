import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { ChatList } from '../components/ChatList';

import {Button, Icon} from 'react-native-elements'

export class MyChats extends Component {

  constructor(props){
    super(props)
    this.state={
      chats:
      [
        {ChatId:1, ProductId: 1, Buyer: 'maboto01', Seller: 'saasmu01', ProductName: 'Harry Potter 1', ProductImage: 'https://reactnative.dev/img/tiny_logo.png'},
        {ChatId:2, ProductId: 2, Buyer: 'saaamu01', Seller: 'maboto01', ProductName: 'The Lord of the rings', ProductImage: 'https://reactnative.dev/img/tiny_logo.png'},
        {ChatId:3, ProductId: 2, Buyer: 'saaamu02', Seller: 'maboto01', ProductName: 'The Lord of the rings', ProductImage: 'https://reactnative.dev/img/tiny_logo.png'},
        {ChatId:4, ProductId: 2, Buyer: 'saaamu03', Seller: 'maboto01', ProductName: 'The Lord of the rings', ProductImage: 'https://reactnative.dev/img/tiny_logo.png'},
      ],
      showListSwith: false
    }
  }

  changeList = (ScreenSwitch) => {
    this.setState({showListSwith: ScreenSwitch});
  }

  render() {
    return (
        <View style={{flexDirection: 'column', height: '100%'}}>
          <FlatList
           data={this.state.chats} 
           keyExtractor={(item, index)=>index.toString()}
           style={{padding:5, flex: 1, backgroundColor: 'white'}}
           renderItem={(item)=>(<ChatList chat={item} showswitch={this.state.showListSwith} navigation={this.props.navigation}/>)}
           />
           <View style={{height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
              <TouchableOpacity style={{width: '40%', marginLeft: '5%', margin: 5, borderRadius: 50, borderColor: 'skyblue', borderWidth: 3}} onPress={() => this.changeList(true)}>
              <Icon name='down'
                      type='antdesign'
                      size={40}
                      color='skyblue'
                      />
              </TouchableOpacity>
              <TouchableOpacity style={{width: '40%', marginRight: '5%', margin: 5, borderRadius: 50, borderColor: 'skyblue', borderWidth: 3}} onPress={() => this.changeList(false)}>
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