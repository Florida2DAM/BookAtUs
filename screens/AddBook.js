import 'react-native-gesture-handler';
import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather';

import {
    StyleSheet,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  
  import {Button, Input} from 'react-native-elements'
import { shouldUseActivityState } from 'react-native-screens';
  
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
            <Button title='Select Image' />
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
  