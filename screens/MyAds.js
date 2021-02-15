import 'react-native-gesture-handler';
import React, { Component } from 'react';
import axios from 'axios';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements';

export class MyAds extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      books: [],
      user: null
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios.get('http://100.25.140.168:7010/api/BookUser?userid=' + this.props.route.params.username).then(res => {
      axios.get('http://100.25.140.168:7010/api/Users/' + this.props.route.params.username).then(result => {
        this.setState({
          books: res.data,
          user: result.data.Avatar,
          loading: false
        })
        console.log(result.data.Avatar);
      })
    }).catch(err => {
      this.setState({ loading: false, })
      alert(err)
    })
  }

  render() {
    const booklist = () => {
      if (this.state.loading == true) {
        return (
          <View style={{ alignItems: 'center', backgroundColor: '#1D263B', height: '200%' }}>
            <Text style={{ marginTop: 40, fontSize: 40, padding: 50, color: '#BFD7EA' }}>Loading books</Text>
            <Image
              source={{ uri: 'https://i.imgur.com/ukqcyRa.gif' }}
              style={{ width: 200, height: 200, tintColor: '#BFD7EA' }}
            />
            <Image
              source={{ uri: 'https://i.imgur.com/F0krMFp.png' }}
              style={{ width: 350, height: 155, marginTop: 90, borderRadius: 20 }}
            />
          </View>
        )
      } else {
        return (
          <View style={{ alignItems: 'center', backgroundColor: '#1D263B', height: '100%' }}>
            <Image source={{ uri: "data:image/png;base64," + this.state.user }} style={{ width: 150, height: 150, margin: 10, borderRadius: 100 }} />
            <ScrollView>
              <FlatList
                style={{ flexWrap: 'wrap' }}
                data={this.state.books}
                scrollEnabled={true}
                numColumns={2}
                renderItem={
                  ({ item }) => {
                    return (
                      <View style={{ width: Dimensions.get('window').width - 220 }}>
                        <View>
                          <TouchableOpacity style={{ borderRadius: 10, margin: 5, borderWidth: 2, borderColor: '#BFD7EA', padding: 2 }} containerStyle={{ width: 190, height: 300, borderRadius: 5 }} onPress={() => this.props.navigation.navigate('BookInfo', {
                            data: item,
                            username: username
                          })}>
                            <Image resizeMode='contain' containerStyle={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} style={{ width: '100%', aspectRatio: 1 }} source={{ uri: "data:image/png;base64," + item.Image }}></Image>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 5, color: '#BFD7EA' }}>{item.Title} {item.Price}€</Text>
                            <Text style={{ color: '#BFD7EA', margin: 5 }}>
                              {item.Description.length >= 20 ? <Text>{item.Description.substring(0, 20)}...</Text> : item.Description}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )
                  }}
              />
            </ScrollView>
          </View>
        )
      }
    }
    return (
      <>
        {booklist()}
      </>
    );
  }
};