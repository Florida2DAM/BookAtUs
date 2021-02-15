import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import axios from 'axios';
import { Alert } from 'react-native';

export class BookInfo extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
    }
  }

  postconfirmproduct() {
    const data = {
      id_Buyer: this.props.route.params.username,
      id_Seller: this.props.route.params.data.UserId,
      Date_Purchase: Date.now(),
      ProductId: this.props.route.params.data.ProductId
    }

    axios.post('http://100.25.140.168:7010/api/PurchaseConfirmed', data).then(res => {
      axios.put('http://100.25.140.168:7010/api/book?id=' + this.props.route.params.data.ProductId).then(
        this.props.navigation.navigate('Main')
      )
    })
  }

  chat() {
    const chat = {
      ProductId: this.props.route.params.data.ProductId,
      Buyer: this.props.route.params.username,
      Seller: this.props.route.params.data.UserId,
    }
    axios.post('http://100.25.140.168:7010/api/Chat?productId=' + chat.ProductId + '&buyer=' + chat.Buyer + '&seller=' + chat.Seller).then(res => {
      this.props.navigation.navigate('MyChats', { username: this.props.route.params.username })
    })
  }

  confirmbuy() {
    Alert.alert(
      "Are you sure?",
      "Do you want to buy this book?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("OK"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.postconfirmproduct() }
      ],
      { cancelable: false }
    );
  }

  selectcategory() {
    let x = this.props.route.params.data.Category;
    let category = '';
    if (x == 1) {
      category = "Mystery"
    } else if (x == 2) {
      category = "Fantasy"
    } else if (x == 3) {
      category = "Studies"
    } else if (x == 4) {
      category = "Romance"
    } else if (x == 5) {
      category = "Light Novel"
    } else if (x == 6) {
      category = "Dark Novel"
    }
    return (<Text style={styles.category}>{category}</Text>)
  }

  renderBtns(item) {
    if (item.UserId == this.props.route.params.username) {
      <View style={styles.footer}>
        <Text></Text>
      </View>
    } else {
      return (
        <View style={styles.footer}>
          <Button buttonStyle={styles.buttonContainer2} titleStyle={{ textAlign: 'auto' }} title='Chat' onPress={() => this.chat()}></Button>
          <Button buttonStyle={styles.buttonContainer} titleStyle={{ textAlign: 'auto' }} title='Comprar' onPress={() => this.confirmbuy()}></Button>
        </View>
      );
    }
  }

  render() {
    const item = this.props.route.params.data;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image resizeMode='contain' source={{ uri: "data:image/png;base64," + item.Image }} style={{ width: '100%', height: 220 }}></Image>
            <View
              style={{
                borderBottomColor: '#BFD7EA'
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: '#BFD7EA' }}>{item.Price}€</Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: '#BFD7EA' }}>{item.Title}</Text>
            <View
              style={{
                borderBottomColor: '#BFD7EA'
              }}
            />
            <View style={styles.categoryContainer}>
              {this.selectcategory()}
            </View>

            <View
              style={{
                borderBottomColor: '#BFD7EA',
                marginBottom: 5,
                marginTop: 5
              }}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginTop: 5, color: '#BFD7EA',marginBottom:60 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <View
              style={{
                borderBottomColor: '#BFD7EA'
              }}
            />
            <Text style={styles.date}>Upload date: {item.UploadDate.replace('T', ' ')}</Text>
          </View>
        </ScrollView>
        {this.renderBtns(item)}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1D263B'
  },
  categoryContainer: {
    backgroundColor: '#BFD7EA',
    borderRadius: 10,
    margin: 10,
    width: '30%'
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1D263B',
    height: 100,
    alignItems:'center'
  },
  category: {
    fontSize: 18,
    padding: 4,
    alignSelf: 'center'
  },
  date: {
    fontSize: 20,
    margin: 10,
    color: '#BFD7EA'
  },
  buttonContainer: {
    backgroundColor: '#2296F3',
    width: Dimensions.get('screen').width - 40,
    height: 40,
    borderRadius: 90,
    marginBottom: 0
  },
  buttonContainer2: {
    backgroundColor: '#2296F3',
    width: Dimensions.get('screen').width - 40,
    height: 40,
    borderRadius: 90,
    marginBottom: 5
  }
})

