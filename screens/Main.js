import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Image, Icon } from 'react-native-elements'
import axios from 'axios';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 3,
      books: [],
      loading: false
    }
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios.get('http://100.25.140.168:7010/api/Product').then(res => {
      this.setState({
        books: res.data,
        loading: false,
        showbook: true
      },
      )
    }).catch(err => {
      this.setState({ loading: false, })
      alert(err)
    })
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const username = this.props.route.params.username;
    const showbook = () => {
      if (this.state.loading) {
        return (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 40, padding: 50, color: '#BFD7EA' }}>Loading books</Text>
            <Image
              source={{ uri: 'https://i.imgur.com/ukqcyRa.gif' }}
              style={{ width: 150, height: 150, tintColor: '#BFD7EA' }}
            />
          </View>
        )
      } else {
        return (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View>
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
                            <Text style={{ fontWeight: 'bold', fontSize: 16, margin: 5, color: '#BFD7EA'}}>{item.Title} {item.Price}€</Text>
                            <Text style={{ color: '#BFD7EA', margin: 5 }}>
                              {item.Description.length >= 20 ? <Text>{item.Description.substring(0, 20)}...</Text> : item.Description}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )
                  }}
              />
              <Text>{'\n'}</Text>
              <Text>{'\n'}</Text>
              <Text>{'\n'}</Text>
            </View>
          </View>
        )
      }
    }

    const component1 = () => { return( <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('BookList', {
        username: username,
      })}
      style={{
        elevation: 8,
        backgroundColor: 'blue',
        paddingVertical: 22,
        paddingHorizontal: 20
      }}

    >
      <Icon
        name='my-library-books'
        type size={30}
        color="#ffffff" />
    </TouchableOpacity>)}
    const component2 = () => { return( <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate("AddBook", {
        username: username,
      })}
      style={{
        elevation: 8,
        backgroundColor: 'blue',
        paddingVertical: 22,
        paddingHorizontal: 20
      }}
    >
      <Icon
        name='library-add'
        type size={30}
        color="#ffffff" />
    </TouchableOpacity>)}
    const component3 = () => { return( <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('Profile', {
        username: username,
      })}
      style={{
        elevation: 8,
        backgroundColor: 'blue',
        paddingVertical: 22,
        paddingHorizontal: 20
      }}

    >
      <Icon
        name='person'
        type size={30}
        color="#ffffff" />
    </TouchableOpacity>)}
    const component5 = () => { return( <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('MyAds', {
        username: username,
      })}
      style={{
        elevation: 8,
        backgroundColor: 'blue',
        paddingVertical: 22,
        paddingHorizontal: 20
      }}

    >
      <Icon
        name='book'
        type size={30}
        color="#ffffff" />
    </TouchableOpacity>)}
    const component6 = () => { return( <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => this.props.navigation.navigate('Profile', {
      username: username,
    })}
    style={{
      elevation: 8,
      backgroundColor: 'blue',
      paddingVertical: 22,
      paddingHorizontal: 20,
      margin:5
    }}

  >
    <Icon
      name='chat'
      type size={30}
      color="#ffffff" />
  </TouchableOpacity>)}
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: 'https://i.imgur.com/F0krMFp.png' }} style={{ width: 350, height: 155, marginBottom: 20, borderRadius: 20, marginTop: 10 }} />
            </View>
            {showbook()}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          {component1(), component2(), component3(), component5(), component6()}
        </View>
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
    backgroundColor: '#1D263B',
    borderRadius: 10,
    margin: 10,
    width: '30%',
    color: 'white'
  },
  footer: {
    flex: 0.1,
    backgroundColor: 'red',
    height: 90,
    margin: '-3%',
    flexDirection: 'row'
  },
})

