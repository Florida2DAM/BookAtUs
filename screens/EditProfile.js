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
import DatePicker from 'react-native-datepicker'
import { Button, Input } from 'react-native-elements'
import ImgToBase64 from 'react-native-image-base64';

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: '',
      name: '',
      surname: '',
      avatar: null,
      password: '',
      date: null
    };
  }
 
  editUser(){
    if (this.state.password != this.state.confirmpassword) {
      alert('Passwords are different')
  } else {
      const newuser = {
          name: this.state.name,
          surname: this.state.surname,
          avatar: this.state.avatar,
          password: this.state.password,
          birth: this.state.date,
      };
      axios.post('http://localhost:7010/api/Users/'+this.props.route.params.username+'/', user).then(res => {
          if (res.data == false) {
              alert("Sorry, User already created")
          } else {
              alert("User created")
              this.props.navigation.navigate('Login')
          }
      }
      ).catch(err => {
          alert(err)
      })
  }
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
            >

            </Input>
          </View>
          <View style={styles.ViewDescription}>
            <Text style={styles.Text}>Surname: </Text>
            <Input style={styles.InputDescription}
              onChangeText={(f) => this.setState({ surname: f })}
            >

            </Input>
          </View>
          <View style={styles.ViewTitle}>
            <Text style={styles.Text}>Password: </Text>
            <Input style={styles.InputPrice}
              keyboardType='numeric'
              onChangeText={(d) => this.setState({ price: d })}           >

            </Input>
            <View style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}>
              <DatePicker
                style={{ width: 300 }}
                date={this.state.date}
                mode="date"
                placeholder="Select Birthday"
                format="DD-MM-YYYY"
                maxDate={datepicker}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => { this.setState({ date }) }}
              />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ alignItems: 'center', marginTop: 100 }} onPress={this.SingleFilePicker.bind(this)}>
              <Image source={{ uri: this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : 'https://i.imgur.com/uYRjNNZ.png' }} style={{ width: 143, height: 130 }} />
            </TouchableOpacity>
            <Button buttonStyle={{ marginTop: 10, width: 290, borderRadius: 10, justifyContent: 'space-around', backgroundColor: '#0091EA' }} title='Modify' />
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