import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SearchBar, ButtonGroup } from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Image } from 'react-native-elements'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 3
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
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
      onPress={() => this.props.navigation.navigate('AddBook')}
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
    const { search } = this.state;
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state

    return (
      <ScrollView>
        <View style={{ flex: 1}}>
        <Image source={{ uri: 'https://i.imgur.com/DTWszbP.png' }} style={{ width: '90%', height: 140, borderRadius: 20, margin: 20 }} />
          <View style={{ width: '100%', bottom: 0, flex: 0.5 }}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{ height: 75, backgroundColor: '#81D3F8' }} />
          </View>
        </View>
      </ScrollView>
    );
  }
};