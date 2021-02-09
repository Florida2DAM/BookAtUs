import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';

import { IndividualChat } from '../components/IndividualChat';

export class MyChatScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      individualChats:
      [
        {ChatId:1, ProductId: 1, Buyer: 'maboto01', Seller: 'saasmu'},
        {ChatId:1, ProductId: 2, Buyer: 'maboto02', Seller: 'saasmu'},
        {ChatId:1, ProductId: 3, Buyer: 'maboto03', Seller: 'saasmu'},
        {ChatId:1, ProductId: 4, Buyer: 'maboto04', Seller: 'saasmu'},
        {ChatId:1, ProductId: 5, Buyer: 'maboto05', Seller: 'saasmu'},
        {ChatId:1, ProductId: 6, Buyer: 'maboto06', Seller: 'saasmu'},
        {ChatId:1, ProductId: 7, Buyer: 'maboto07', Seller: 'saasmu'},
        {ChatId:1, ProductId: 8, Buyer: 'maboto08', Seller: 'saasmu'},
        {ChatId:1, ProductId: 9, Buyer: 'maboto09', Seller: 'saasmu'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu01', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu02', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu03', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu04', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu05', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu06', Seller: 'maboto01'},
        {ChatId:1, ProductId: 10, Buyer: 'saasmu07', Seller: 'maboto01'},

      ]
    }
    
  }

    render(){
        return(
            <View>
                <View style={{height: '10%', minHeight: 50, width: '100%', flexDirection: 'row'}}>
                    <Button>Buys</Button>
                    <Button>Sells</Button>
                </View>
                <View>
                  <FlatList
                    data={this.state.individualChats} 
                    keyExtractor={(item, index)=>index.toString()}
                    style={{padding:5, flex: 2, backgroundColor: 'white'}}
                    renderItem={(item)=>(<IndividualChat message={item}/>  )}
                    />
                </View>
            </View>
        )
    }
}