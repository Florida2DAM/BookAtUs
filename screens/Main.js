import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { SearchBar, ButtonGroup } from 'react-native-elements';



import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button} from 'react-native-elements'

export class Main extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 3
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const component1 = () => <Text style={{fontFamily: 'Arial', fontSize: 22}} onPress={()=>this.props.navigation.navigate('BookList')}>Library</Text>
    const component2 = () => <Text style={{fontFamily: 'Arial', fontSize: 22}} onPress={()=>this.props.navigation.navigate('AddBook')}>Add</Text>
    const component3 = () => <Text style={{fontFamily: 'Arial', fontSize: 22}} onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
    const { search } = this.state;
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
  const { selectedIndex } = this.state

    return (
      <View style={{flex: 1}}>
      
      <SearchBar
      inputContainerStyle={{backgroundColor: 'white'}}
      leftIconContainerStyle={{backgroundColor: 'white'}}
      inputStyle={{backgroundColor: 'white'}}
      containerStyle={{
        backgroundColor: '#81D3F8',
        justifyContent: 'space-around',
        borderTopWidth:0,
        borderBottomWidth:0}}
      />
      <View style={{ position: 'absolute', width:'100%',bottom: 0,flex: 0.5 }}>
        <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 75, backgroundColor: '#81D3F8'}} />
        </View>
      </View>
    );
  }
};