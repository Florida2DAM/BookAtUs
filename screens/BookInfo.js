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

export class BookInfo extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
    }
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

  render() {
    const item = this.props.route.params.data;
    //alert(JSON.stringify(this.props.route.params.data.Category))
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image resizeMode='contain' source={{ uri: "data:image/png;base64," + item.Image }} style={{ width: '100%', height: 220 }}></Image>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>{item.Price}€</Text>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>{item.Description}</Text>

            <View style={styles.categoryContainer}>
              {this.selectcategory()}
            </View>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
              }}
            />
            <Text style={styles.date}>Upload date: {item.UploadDate.replace('T', ' ')}</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button buttonStyle={styles.buttonContainer2} titleStyle={{ textAlign: 'auto' }} title='Chat'></Button>
          <Button buttonStyle={styles.buttonContainer} titleStyle={{ textAlign: 'auto' }} title='Comprar'></Button>
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
    height: 100,
    alignItems: 'center',
  },
  category: {
    fontSize: 18,
    padding: 4
  },
  date: {
    fontSize: 20,
    margin: 10
  },
  buttonContainer: {
    backgroundColor: '#FFA579',
    width: Dimensions.get('screen').width - 40,
    height: 40,
    borderRadius: 90,
    marginBottom: 0
  },
  buttonContainer2: {
    backgroundColor: '#13BDA6',
    width: Dimensions.get('screen').width - 40,
    height: 40,
    borderRadius: 90,
    marginBottom: 5
  }
})

