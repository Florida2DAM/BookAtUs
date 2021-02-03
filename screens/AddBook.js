import 'react-native-gesture-handler';
import React, { Component , useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather';
import DocumentPicker from 'react-native-document-picker';

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
  
  import {Button, Input} from 'react-native-elements'
import { shouldUseActivityState } from 'react-native-screens';


  


 

const selectOneFile = async () => {
  //Opening Document Picker for selection of one file
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
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
    console.log('File Name : ' + res.name);
    console.log('File Size : ' + res.size);
    //Setting the state to show single file attributes
    setSingleFile(res);
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
  export class AddBook extends Component {
    constructor (props){
        super(props)
        this.state = {
            book:"Fantasy"
        }
    }
    render() {

      return (
          <View style={styles.contenidor}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.ViewTitle}>
                <Text style={styles.Text}>Book Title: </Text>
                <Input style={styles.InputTitle}>

                </Input>
            </View>
            <View style={styles.ViewDescription}>
                <Text style={styles.Text}>Description: </Text>
                <Input style={styles.InputDescription}>

                </Input>
            </View>
            <View style={styles.ViewTitle}>
                <Text style={styles.Text}>Price: </Text>
                <Input style ={styles.InputPrice}>

                </Input>
            </View>
            <View>
            <DropDownPicker
                 items={[
                    {label: 'Mystery', value: 'mystery'},
                    {label: 'Fantasy', value: 'Fantasy'},
                    {label: 'Studies', value: 'Studies'},
                    {label: 'Romance', value: 'Romance'},
                    {label: 'LightNovel', value: 'lightnovel'},
                    {label: 'HeavyNovel', value: 'heavynovel'}
                ]}
                defaultValue={this.state.book}
                containerStyle={{height: 60 ,width:350}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                 }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                book: item.value
                 })}
            />
            </View>
            <View>

            {/*To show single file attribute*/}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={selectOneFile}>
            {/*Single file selection button*/}
            <Text style={{marginRight: 10, fontSize: 19}}>
              Click here to pick one file
            </Text>
            {/*<Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            />*/}
          </TouchableOpacity>


            </View>
            <View>
            <Button title='Post' />
            </View>
          </View>
      );
    }
  };
  
  const styles = StyleSheet.create({
    contenidor: {
      backgroundColor:'white',
      flex:1,
      flexDirection:'column',
      padding:5,
      margin:5,
      alignContent: 'space-around',
      alignItems:'center',
    },
    ViewTitle: {
        width:350,
        height:110,
        backgroundColor: 'white',
        color: 'white',
        fontSize:13,
        borderRadius:20,
        paddingBottom:5,
        marginBottom:10
      },
    ViewDescription: {
        width:350,
        height:150,
        backgroundColor: 'white',
        color: 'white',
        fontSize:13,
        borderRadius:20,
        paddingBottom:5,
        marginBottom:10
    },
    ViewPrice: {
        width:350,
        height:110,
        backgroundColor: 'white',
        color: 'white',
        fontSize:13,
        borderRadius:20,
        paddingBottom:5,
        marginBottom:10
    },
    Text: {
        padding: 5,
        fontSize:15
    },
    InputTitle: {
        height:55,
        width:200,
        fontSize:12,
        borderStyle:'solid',
        borderWidth:2
    },
    InputDescription: {
        height:100,
        width:200,
        fontSize:12,
        borderStyle:'solid',
        borderWidth:2
    },
    InputPrice: {
        height:60,
        width:200,
        fontSize:12,
        borderStyle:'solid',
        borderWidth:2
    },
    
  });
  
  export default AddBook;
  