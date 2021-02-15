import 'react-native-gesture-handler';
import React, { Component } from 'react';
import DocumentPicker from 'react-native-document-picker';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Button, Input } from 'react-native-elements'
import ImgToBase64 from 'react-native-image-base64';
import axios from 'axios';

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: '',
      name: '',
      surname: '',
      avatar: null,
      password: '',
      user: null
    };
  }

  componentDidMount() {
    axios.get('http://100.25.140.168:7010/api/Users/' + this.props.route.params.username).then(res => {
      const user = res.data
      this.setState({
        user
      })
    }).catch(err => {
      alert(err)
      this.props.navigation.navigate('Profile')
    })
  }

  editUser() {
    if (this.state.user == null) {
      this.setState({ user: this.state.user.Name })
    }
    if (this.state.surname == null) {
      this.setState({ surname: this.state.user.Surname })
    }
    if (this.state.avatar == null) {
      this.setState({ avatar: this.state.user.Avatar })
    }
    if (this.state.password == null) {
      this.setState({ password: this.state.user.Password })
    }
    const newuser = {
      UserId: this.state.user.UserId,
      Name: this.state.name,
      Surname: this.state.surname,
      avatar: this.state.avatar,
      Password: this.state.password,
      Birth: this.state.user.Birth
    };
    axios.put('http://100.25.140.168:7010/api/Users/' + this.props.route.params.username + '/', newuser).then(res => {
      alert('Updated user')
    }).catch(err => {
      alert(err)
    })

  }

  async SingleFilePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      this.setState({ singleFileOBJ: res });
      ImgToBase64.getBase64String(res.uri)
        .then(base64String => this.setState({ avatar: base64String }))
        .catch(err => alert(err));

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  render() {
    const year = new Date().getFullYear() - 18;
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const datepicker = day + "-" + month + "-" + year
    return (
      <ScrollView>
        <View style={styles.contenidor}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.ViewTitle}>
            <Text style={styles.Text}>Name : </Text>
            <Input style={styles.InputTitle}
              onChangeText={(e) => this.setState({ name: e })}
              placeholder={this.state.user == null ? "Name..." : this.state.user.Name}
            >

            </Input>
          </View>
          <View style={styles.ViewDescription}>
            <Text style={styles.Text}>Surname: </Text>
            <Input style={styles.InputDescription}
              onChangeText={(f) => this.setState({ surname: f })}
              placeholder={this.state.user == null ? "Name..." : this.state.user.Surname}
            >

            </Input>
          </View>
          <View style={styles.ViewTitle}>
            <Text style={styles.Text}>Password: </Text>
            <Input style={styles.InputPrice}
              keyboardType='visible-password'
              secureTextEntry={true}
              onChangeText={(d) => this.setState({ password: d })}>
            </Input>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 100 }} onPress={this.SingleFilePicker.bind(this)}>
              <Image source={{ uri: this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : 'https://i.imgur.com/uYRjNNZ.png' }} style={{ width: 143, height: 130 }} />
            </TouchableOpacity>
            <Button buttonStyle={{ marginTop: 10, width: 290, borderRadius: 10, justifyContent: 'space-around', backgroundColor: '#0091EA' }} onPress={() => this.editUser()} title='Modify' />
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
    height: 110,
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
    height: 55,
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