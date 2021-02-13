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
import { Image } from 'react-native-elements'
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
    axios.get('http://10.0.2.2:7010/api/Product').then(res => {
      this.setState({
        books: res.data,
        loading: false,
        showbook: true
      },
      )
    }).catch(err => {
      alert(err)
    })
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const showbook = () => {
      if (this.state.loading) {
        return (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 40, padding: 50 }}>Loading books</Text>
            <Image
              source={{ uri: 'https://i.imgur.com/ukqcyRa.gif' }}
              style={{ width: 150, height: 150 }}
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
                          <TouchableOpacity style={{ borderRadius: 10, margin: 5, borderWidth: 4, borderColor: 'lightgrey', padding: 2 }} containerStyle={{ width: 190, height: 300, borderRadius: 5 }} onPress={() => this.props.navigation.navigate('BookInfo', {
                            data: item
                          })}>
                            <Image resizeMode='contain' containerStyle={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} style={{ width: '100%', aspectRatio: 1 }} source={{ uri: "data:image/png;base64," + item.Image }}></Image>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 5 }}>{item.Price}€</Text>
                            <Text>
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

    const component1 = () => <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('BookList')}
      style={{
        elevation: 8,
        backgroundColor: "#81D3F8",
        paddingVertical: 22,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%'
      }}

    >
      <Text style={{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }}>Library</Text>
    </TouchableOpacity>
    const component2 = () => <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate("AddBook")}
      style={{
        elevation: 8,
        backgroundColor: "#81D3F8",
        paddingVertical: 22,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%'
      }}

    >
      <Text style={{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }}>Add</Text>
    </TouchableOpacity>
    const component3 = () => <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('Profile')}
      style={{
        elevation: 8,
        backgroundColor: "#81D3F8",
        paddingVertical: 22,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%'
      }}

    >
      <Text style={{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }}>Profile</Text>
    </TouchableOpacity>
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <Image source={{ uri: 'https://i.imgur.com/DTWszbP.png' }} style={{ width: '90%', height: 140, borderRadius: 20, margin: 20 }} />
            {showbook()}
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 75, backgroundColor: '#81D3F8' }} />
        </View>
      </View>

    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  categoryContainer: {
    backgroundColor: 'lightgrey',
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
    backgroundColor: 'whitesmoke',
    height: 90,
    alignItems: 'center',
  },
})

