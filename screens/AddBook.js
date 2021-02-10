import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import DocumentPicker from 'react-native-document-picker';
import axios from "axios";
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button, Input } from 'react-native-elements'
import { shouldUseActivityState } from 'react-native-screens';

export class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: '',
      title : '',
      description : '',
      price : null,
      category : null,
      userId : 'admin',
      image : '',
      url: 'http://10.0.2.2:7010/api/Product'
    };
  }

  async SingleFilePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],

      });

      this.setState({ singleFileOBJ: res });

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  postbook = () => {
    const book = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      category: this.state.category,
      proprietaryuserid: this.state.userId,
      image: this.state.image
    };
    axios.post(this.state.url, book).then(
    this.props.navigation.navigate('Main')
    ).catch(err => {
      alert(err)
    })
  }
categorytoint = (x) => {
  if(x == "mystery"){
    this.setState({category:1})
  } else if(x == "Fantasy"){
    this.setState({category:2})
  } else if(x == "Studies"){
    this.setState({category:3})
  } else if(x == "Romance"){
    this.setState({category:4})
  } else if(x == "lightnovel"){
    this.setState({category:5})
  } else if(x == "heavynovel"){
    this.setState({category:6})
  } else{
    alert("Pick a category")
  }
}

  render() {
    const selectOneFile = async () => {
      //Opening Document Picker for selection of one file
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
          //There can me more options as well
          // DocumentPicker.types.allFiles
          // DocumentPicker.types.images
          // DocumentPicker.types.plainText
          // DocumentPicker.types.audio
          // DocumentPicker.types.pdf
        });
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        alert('File Name : ' + res.name);
        alert('File Size : ' + res.size);
        //Setting the state to show single file attributes
        this.setState(res);
      } catch (err) {
        //Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
          //If user canceled the document selection
          alert('Canceled from single doc picker');
        } else {
          //For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    };
    return (
      <ScrollView>
        <View style={styles.contenidor}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.ViewTitle}>
            <Text style={styles.Text}>Book Title: </Text>
            <Input style={styles.InputTitle}
              onChangeText={(e) => this.setState({ title: e })}
            >

            </Input>
          </View>
          <View style={styles.ViewDescription}>
            <Text style={styles.Text}>Description: </Text>
            <Input style={styles.InputDescription}
              onChangeText={(f) => this.setState({ description: f })}
            >

            </Input>
          </View>
          <View style={styles.ViewTitle}>
            <Text style={styles.Text}>Price: </Text>
            <Input style={styles.InputPrice}
              keyboardType='numeric'
              onChangeText={(d) => this.setState({ price: d })}           >

            </Input>
          </View>
          <View>
            <DropDownPicker
              items={[
                { label: 'Mystery', value: 'mystery' },
                { label: 'Fantasy', value: 'Fantasy' },
                { label: 'Studies', value: 'Studies' },
                { label: 'Romance', value: 'Romance' },
                { label: 'LightNovel', value: 'lightnovel' },
                { label: 'HeavyNovel', value: 'heavynovel' }
              ]}
              defaultValue={this.state.book}
              containerStyle={{ height: 60, width: 350 }}
              style={{ backgroundColor: '#fafafa' }}
              itemStyle={{
                justifyContent: 'flex-start'
              }}
              dropDownStyle={{ backgroundColor: '#fafafa' }}
              onChangeItem={item => this.categorytoint(item.value)}
            />
          </View>
          <View style={styles.MainContainer}>
            <Text style={styles.text}>
              File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
            </Text>
            <View style={{ alignItems: 'center' }}>
              <Image source={{ uri: this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : ''}} style={{ width: 143, height: 130 }} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.button}
                onPress={this.SingleFilePicker.bind(this)}>
                <Text style={styles.buttonText}>
                  Click Here To Pick File
          </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Button buttonStyle={{ width: 230, borderRadius: 10, backgroundColor: '#0091EA' }} title='Post' onPress={this.postbook} />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    margin: 5,
    alignContent: 'space-around',
    alignItems: 'center',
  },
  ViewTitle: {
    width: 350,
    height: 110,
    backgroundColor: 'white',
    color: 'white',
    fontSize: 13,
    borderRadius: 20,
    paddingBottom: 5,
    marginBottom: 10
  },
  ViewDescription: {
    width: 350,
    height: 150,
    backgroundColor: 'white',
    color: 'white',
    fontSize: 13,
    borderRadius: 20,
    paddingBottom: 5,
    marginBottom: 10
  },
  ViewPrice: {
    width: 350,
    height: 110,
    backgroundColor: 'white',
    color: 'white',
    fontSize: 13,
    borderRadius: 20,
    paddingBottom: 5,
    marginBottom: 10
  },
  Text: {
    padding: 5,
    fontSize: 15
  },
  InputTitle: {
    height: 55,
    width: 200,
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 2
  },
  InputDescription: {
    height: 100,
    width: 200,
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 2
  },
  InputPrice: {
    height: 60,
    width: 200,
    fontSize: 12,
    borderStyle: 'solid',
    borderWidth: 2
  },
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },

  button: {
    width: '100%',
    backgroundColor: '#0091EA',
    borderRadius: 9,
  },

  buttonText: {
    color: '#fff',
    fontSize: 21,
    padding: 10,
    textAlign: 'center'
  },

  text: {
    color: '#000',
    fontSize: 16,
    padding: 10,
    textAlign: 'left'
  },

});