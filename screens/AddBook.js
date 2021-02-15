import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import {
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Button, Input } from 'react-native-elements'
import ImgToBase64 from 'react-native-image-base64';
import DropDownPicker from 'react-native-dropdown-picker'
import DocumentPicker from 'react-native-document-picker';
import axios from "axios";

export class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleFileOBJ: '',
            title: '',
            description: '',
            price: null,
            category: null,
            userId: this.props.route.params.username,
            image: '',
            url: 'http://100.25.140.168:7010/api/Product'
        };
    }

    async SingleFilePicker() {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],

            });

            this.setState({ singleFileOBJ: res });
            ImgToBase64.getBase64String(res.uri)
                .then(base64String => this.setState({ image: base64String }))
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

    postbook() {
        const book = {
            Title: this.state.title,
            Description: this.state.description,
            Price: this.state.price,
            Category: this.state.category,
            UserId: this.state.userId,
            image: this.state.image
        };
        axios.post(this.state.url, book).then(
            this.props.navigation.navigate('Main')
        ).catch(err => {
            alert(err)
        })
    }
    categorytoint = (x) => {
        if (x == "mystery") {
            this.setState({ category: 1 })
        } else if (x == "Fantasy") {
            this.setState({ category: 2 })
        } else if (x == "Studies") {
            this.setState({ category: 3 })
        } else if (x == "Romance") {
            this.setState({ category: 4 })
        } else if (x == "lightnovel") {
            this.setState({ category: 5 })
        } else if (x == "Dark novel") {
            this.setState({ category: 6 })
        } else {
            alert("Pick a category")
        }
    }

    render() {
        let disable = true;
        if (this.state.image != '' && this.state.title != '' && this.state.description != '' && this.state.price != null && this.state.category != null) {
            disable = false;
        }
        return (

            <View style={styles.MainContainer}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: 'https://i.imgur.com/F0krMFp.png' }} style={{ width: 350, height: 155, marginBottom: 20, borderRadius: 20 }} />
                    </View>
                    <StatusBar barStyle="dark-content" />
                    <View style={styles.ViewTitle}>
                        <Input style={{ color: '#BFD7EA' }}
                            placeholderTextColor='#9F84BD'
                            placeholder='Book title'
                            leftIcon={{ name: 'book', color: '#9F84BD' }}
                            onChangeText={(e) => this.setState({ title: e })}
                        >
                        </Input>
                    </View>
                    <View style={styles.ViewDescription}>
                        <Input style={{ color: '#BFD7EA' }}
                            placeholderTextColor='#9F84BD'
                            placeholder='Description'
                            leftIcon={{ name: 'create', color: '#9F84BD' }}
                            multiline={true}
                            onChangeText={(f) => this.setState({ description: f })}
                        >
                        </Input>
                    </View>
                    <View style={styles.ViewPrice}>
                        <Input style={{ color: '#BFD7EA' }}
                            placeholderTextColor='#9F84BD'
                            placeholder='Price'
                            leftIcon={{ name: 'euro', color: '#9F84BD' }}
                            keyboardType='numeric'
                            onChangeText={(d) => this.setState({ price: d })}           >

                        </Input>
                    </View>
                    <View >
                        <DropDownPicker
                            items={[
                                { label: 'Mystery', value: 'mystery', color: 'blue' },
                                { label: 'Fantasy', value: 'Fantasy' },
                                { label: 'Studies', value: 'Studies' },
                                { label: 'Romance', value: 'Romance' },
                                { label: 'Light novel', value: 'Light novel' },
                                { label: 'Dark novel', value: 'Dark novel' }
                            ]}
                            defaultValue={this.state.book}
                            labelStyle={{ color: '#BFD7EA' }}
                            containerStyle={{ height: 60, width: 350 }}
                            style={{ backgroundColor: '#1D263B' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#1D263B' }}
                            onChangeItem={item => this.categorytoint(item.value)}
                        />
                    </View>
                    <View style={styles.MainContainer}>
                        <Text style={styles.Text}>
                            File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
                        </Text>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.SingleFilePicker.bind(this)}>
                                <Image onpre source={{ uri: this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : 'https://i.imgur.com/uYRjNNZ.png' }} style={{ width: 143, height: 130 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.MainContainer}>
                        <Button disabled={disable} buttonStyle={{ width: 230, borderRadius: 10, backgroundColor: '#0091EA' }} title='Post' onPress={this.postbook.bind(this)} />
                    </View>
                </ScrollView>
            </View>

        );
    }
};

const styles = StyleSheet.create({
    contenidor: {
        backgroundColor: '#1D263B',
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewTitle: {
        width: 350,
        height: 110,
        backgroundColor: '#1D263B',
        color: 'white',
        fontSize: 13,
        borderRadius: 20,
        marginTop: 20
    },
    ViewDescription: {
        width: 350,
        height: 150,
        backgroundColor: '#1D263B',
        color: 'white',
        fontSize: 13,
        borderRadius: 20

    },
    ViewPrice: {
        width: 350,
        height: 110,
        backgroundColor: '#1D263B',
        color: 'white',
        fontSize: 13,
        borderRadius: 20,
        marginTop: '-10%'
    },
    Text: {
        padding: 5,
        fontSize: 15,
        color: '#BFD7EA'
    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        justifyContent: 'center',
        backgroundColor: '#1D263B',
        alignContent: 'space-around',
        alignItems: 'center',

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