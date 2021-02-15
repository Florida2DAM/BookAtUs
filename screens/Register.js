import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import axios from "axios";
import { Button, Input, CheckBox } from 'react-native-elements';
import DocumentPicker from 'react-native-document-picker';
import DatePicker from 'react-native-datepicker';
import ImgToBase64 from 'react-native-image-base64';
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleFileOBJ: '',
            userid: '',
            name: '',
            surname: '',
            avatar: null,
            password: '',
            confirmpassword: '',
            rating: 0,
            sells: 0,
            buys: 0,
            url: 'http://100.25.140.168:7010/api/insertUser',
            checked: false,
            date: null
        };
    }

    navigateToScreen = (route, params) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params: params
        });
        this.props.navigation.dispatch(navigateAction);
    }

    handlePlaceholder = () =>
        this.state.pickedDate
            ? this.state.pickedDate.toDateString()
            : "Birthday";

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

        let disable = true;
        if (this.state.image != '' && this.state.name != '' && this.state.surname != '' && this.state.date != '' && this.state.userid != '' && this.state.password != '' & this.state.checked) {
            disable = false;
        }
        const year = new Date().getFullYear() - 18;
        const month = new Date().getMonth();
        const day = new Date().getDate();
        const datepicker = day + "-" + month + "-" + year
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1D263B', alignItems: 'center', alignContent: 'center' }}>
                    <StatusBar barStyle="light-content" />
                    <View style={{ margin: 50 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={{ uri: 'https://i.imgur.com/F0krMFp.png' }} style={{ width: '100%', height: 220, marginBottom: 20, borderRadius: 20 }} />
                        </View>
                        <View style={{ flex: 9.5 }}>
                            <Input
                                style={{ color: '#BFD7EA' }}
                                placeholderTextColor='#9F84BD'
                                placeholder='Name'
                                leftIcon={{ name: 'person', color: '#9F84BD' }}
                                onChangeText={(e) => this.setState({ name: e })}
                            />
                            <Input
                                style={{ color: '#BFD7EA' }}
                                placeholderTextColor='#9F84BD'
                                placeholder='Surname'
                                leftIcon={{ name: 'person', color: '#9F84BD' }}
                                onChangeText={(e) => this.setState({ surname: e })}
                            />
                            <Input
                                style={{ color: '#BFD7EA' }}
                                placeholderTextColor='#9F84BD'
                                placeholder='Email'
                                leftIcon={{ name: 'mail', color: '#9F84BD' }}
                                onChangeText={(e) => this.setState({ userid: e })}
                            />
                            <Input
                                style={{ color: '#BFD7EA' }}
                                placeholderTextColor='#9F84BD'
                                placeholder='Password'
                                secureTextEntry={true}
                                leftIcon={{ name: 'lock', color: '#9F84BD' }}
                                onChangeText={(e) => this.setState({ password: e })}
                            />
                            <Input
                                style={{ color: '#BFD7EA' }}
                                placeholderTextColor='#9F84BD'
                                placeholder='Confirm Password'
                                secureTextEntry={true}
                                leftIcon={{ name: 'lock', color: '#9F84BD' }}
                                onChangeText={(e) => this.setState({ confirmpassword: e })}
                            />
                            <View style={{ borderWidth: 2, padding: 10, borderRadius: 10 }}>
                                <DatePicker
                                    style={{ width: 200 }}
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
                                            marginLeft: 36,
                                            borderColor: '#636E79'
                                        },
                                        dateText: {
                                            color: '#BFD7EA'
                                        }
                                    }}
                                    onDateChange={(date) => { this.setState({ date }) }}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={{ alignItems: 'center', marginTop: 10 }} onPress={this.SingleFilePicker.bind(this)}>
                            <Image source={{ uri: this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : 'https://i.imgur.com/uYRjNNZ.png' }} style={{ width: 143, height: 130 }} />
                        </TouchableOpacity>

                        <View style={{ flex: 1 }}>
                            <CheckBox
                                containerStyle={{ backgroundColor: '#2296F3', borderColor: '#2296F3' }}
                                textStyle={{ color: '#BFD7EA' }}
                                checkedColor='#9F84BD'
                                center
                                title='I accept the conditions of use and the basic information on data protection'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button disabled={disable} title='Continue' buttonStyle={{ backgroundColor: '#2296F3' }} onPress={() => {
                                if (this.state.password != this.state.confirmpassword) {
                                    alert('Passwords are different')
                                } else {
                                    const user = {
                                        userid: this.state.userid,
                                        name: this.state.name,
                                        surname: this.state.surname,
                                        avatar: this.state.avatar,
                                        password: this.state.password,
                                        birth: this.state.date,
                                        rating: this.state.rating,
                                        sells: this.state.sells,
                                        buys: this.state.buys
                                    };
                                    axios.post(this.state.url, user).then(res => {
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
                            }} />
                            <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: 18, color: '#BFD7EA' }}>Have you an account?</Text>
                            <Text style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: 18, color: '#169BD5' }} onPress={() => this.props.navigation.navigate('Login')}>Log in</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
};