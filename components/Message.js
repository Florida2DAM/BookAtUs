import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

export class Message extends Component {
  constructor(props){
    super(props)
    
  }
  
    renderMsg = () => {
        const currentUser = this.props.currentUser;
        if (this.props.message.item.User == currentUser) {
            return(        
            <View elevation= {4} style={{backgroundColor:'skyblue', borderRadius: 10, padding: 5, margin: 5}}>
                <View style={{flexDirection: 'row', textAlign: 'right', justifyContent: 'flex-end'}}>
                <Text style={{color:'black', fontSize:18, fontWeight: 'bold'}}>
                    {this.props.message.item.User}
                </Text>
                </View>
                <Text style={{color:'black', fontSize:14, textAlign: 'right'}}>
                    {this.props.message.item.Body}
                </Text>
                <Text style={{color:'black', fontSize:10, textAlign: 'right'}}>
                    {this.props.message.item.Date}
                </Text>
            </View>)
        } else {
            return(        
            <View elevation= {4} style={{backgroundColor:'lightgrey', borderRadius: 10, padding: 5, margin: 5}}>
                <Text style={{color:'black', fontSize:18, textAlign: 'left', fontWeight: 'bold'}}>
                {this.props.message.item.User}
                </Text>
                <Text style={{color:'black', fontSize:14, textAlign: 'left'}}>
                {this.props.message.item.Body}
                </Text>
                <Text style={{color:'black', fontSize:10, textAlign: 'right'}}>
                    {this.props.message.item.Date}
                </Text>
            </View>)
        }
    }

    render(){
        return(
            this.renderMsg()
        )
    }
}