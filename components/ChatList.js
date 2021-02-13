import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {
  View,
  Image,
  Text
} from 'react-native';



export class ChatList extends Component {
  constructor(props){
    super(props)

  }

    renderMsg = () => {
        const currentUser = this.props.username;
        if (this.props.showswitch) {
            if (this.props.chat.item.Seller == currentUser) {
                return(        
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', {chatid: this.props.chat.item.ChatId, username: currentUser})} style={{backgroundColor:'skyblue', borderRadius: 10, padding: 5, margin: 5}}>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Image style={{height: '100%', borderRadius: 50, aspectRatio: 1, marginRight: 5}}
                            source={{ uri: "data:image/png;base64," + this.props.chat.item.ProductImage}}
                        />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{this.props.chat.item.ProductName}</Text>
                            <Text style={{fontSize: 14}}>{this.props.chat.item.Buyer}</Text>
                        </View>
                    </View>
                </TouchableOpacity>)
            } else {
                return null;
            }
        } else {
            if (this.props.chat.item.Seller != currentUser) {
                return(        
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', {chatid: this.props.chat.item.ChatId, username: currentUser})} style={{backgroundColor:'skyblue', borderRadius: 10, padding: 5, margin: 5}}>
                    <View style={{flexDirection: 'row', height: 50}}>
                    <Image style={{height: '100%', borderRadius: 50, aspectRatio: 1, marginRight: 5}}
                            source={{ uri: "data:image/png;base64," + this.props.chat.item.ProductImage}}
                        />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{this.props.chat.item.ProductName}</Text>
                            <Text style={{fontSize: 14}}>{this.props.chat.item.Seller}</Text>
                        </View>
                    </View>
                </TouchableOpacity>)
            } else {
                return null;
            }
        }
    }

    render(){
        return(
            this.renderMsg()
        )
    }
} 