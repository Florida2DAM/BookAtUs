import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export class IndividualChat extends Component {
  constructor(props){
    super(props)
    
  }
  
    renderChat = () => {
        const currentUser = "maboto01";
        if (this.props.chat.item.Buyer == currentUser) {
            return(        
            <TouchableOpacity onPress={console.log('Click en chat ' + this.props.chat.item.ChatId + ' el proucto ' + this.props.chat.item.ProductId)}>    
                <View elevation= {4} style={{backgroundColor:'skyblue', borderRadius: 10, padding: 5, margin: 5}}>
                    <View style={{flexDirection: 'row', textAlign: 'right', justifyContent: 'flex-end'}}>
                        <Text style={{color:'black', fontSize:24, fontWeight: 'bold'}}>
                            {this.props.chat.item.Seller}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>)
        } else {
            return(
            <TouchableOpacity onPress={console.log('Click en chat ' + this.props.chat.item.ChatId + ' el proucto ' + this.props.chat.item.ProductId)}>    
                <View elevation= {4} style={{backgroundColor:'skyblue', borderRadius: 10, padding: 5, margin: 5}}>
                    <View style={{flexDirection: 'row', textAlign: 'right', justifyContent: 'flex-end'}}>
                        <Text style={{color:'black', fontSize:24, fontWeight: 'bold'}}>
                            {this.props.chat.item.Buyer}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>)
        }
    }

    render(){
        return(
            this.renderChat()
        )
    }
}