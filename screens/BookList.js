import axios from 'axios';
import React, { Component } from 'react';
import { View, Button, Text, StatusBar, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { Image } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export class BookList extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
            category: '',
            books: [],
            loading: false,
            showbook: false
        }
    }

    changeCategory = (category) => {
        this.setState({ category })
    }

    loadBooks(link) {
        this.setState({ loading: true })
        axios.get(link).then(res => {
            this.setState({
                books: res.data,
                loading: false,
                showbook: true
            },
            )
        }).catch(err => {
            alert(err)
        })
    }

    render() {
        const username = this.props.route.params.username
        const booklist = () => {
            if (this.state.loading == true) {
                return (
                    <View style={{ alignItems: 'center', backgroundColor: '#1D263B', height: '200%' }}>
                        <Text style={{ marginTop: 40, fontSize: 40, padding: 50, color: '#BFD7EA' }}>Loading books</Text>
                        <Image
                            source={{ uri: 'https://i.imgur.com/ukqcyRa.gif' }}
                            style={{ width: 200, height: 200, tintColor: '#BFD7EA' }}
                        />
                        <Image
                            source={{ uri: 'https://i.imgur.com/F0krMFp.png' }}
                            style={{ width: 350, height: 155, marginTop: 90, borderRadius: 20 }}
                        />

                    </View>
                )
            } else {
                if (this.state.showbook == false) {
                    return (
                        <ScrollView>
                            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1D263B', alignItems: 'center', alignContent: 'center' }}>
                                <StatusBar barStyle="dark-content" />
                                <View style={{ margin: 50 }}>
                                    <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#BFD7EA', flex: 0.20 }}> Book Categories </Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Card containerStyle={{ width: 175, backgroundColor: '#5C6784', borderColor: '#5C6784', borderRadius: 10 }}>
                                            <Button title='Fantasy' onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=2'), this.changeCategory('Fantasy') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/BiKQwmUs.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=2'), this.changeCategory('Fantasy') }}></Image>
                                        </Card>
                                        <Card containerStyle={{ width: 175, backgroundColor: '#5C6784', borderColor: '#5C6784', borderRadius: 10 }}>
                                            <Button title='Mystery' onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=1'), this.changeCategory('Mystery') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/htzIa7fs.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=1'), this.changeCategory('Mystery') }}></Image>
                                        </Card>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Card containerStyle={{ width: 175, backgroundColor: '#5C6784', borderColor: '#5C6784', borderRadius: 10 }}>
                                            <Button title='Studies' onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=3'), this.changeCategory('Studies') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/Vaxo1Kos.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=3'), this.changeCategory('Studies') }}></Image>
                                        </Card>
                                        <Card containerStyle={{ width: 175, backgroundColor: '#5C6784', borderColor: '#5C6784', borderRadius: 10 }}>
                                            <Button title='Romance' onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=4'), this.changeCategory('Romance') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/pWuhhh2s.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=4'), this.changeCategory('Romance') }}></Image>
                                        </Card>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Card containerStyle={{ width: 175, backgroundColor: '#5C6784', borderColor: '#5C6784', borderRadius: 10 }}>
                                            <Button title='Light novel' onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=5'), this.changeCategory('Light Novel') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/5jjnXtzs.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=5'), this.changeCategory('Light Novel') }}></Image>
                                        </Card>
                                        <Card containerStyle={{ width: 175, backgroundColor: '#5C6784', borderColor: '#5C6784', borderRadius: 10 }}>
                                            <Button title='Dark novel' onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=6'), this.changeCategory('Dark Novel') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/gtxJeHys.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://100.25.140.168:7010/api/Product?category=6'), this.changeCategory('Dark Novel') }}></Image>
                                        </Card>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    )
                } else {
                    return (
                        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1D263B', alignItems: 'center', alignContent: 'center' }}>
                            <View>
                                <Text style={{color: '#BFD7EA', fontSize: 30, alignSelf:'center', padding: 11}}>{this.state.category}</Text>
                                <ScrollView>
                                    <FlatList
                                        style={{ flexWrap: 'wrap' }}
                                        data={this.state.books}
                                        scrollEnabled={true}
                                        numColumns={2}
                                        renderItem={
                                            ({ item }) => {
                                                return (
                                                    <View>
                                                        <View style={{ flex: 1 }}>
                                                            <TouchableOpacity style={{ borderRadius: 10, margin: 5, borderWidth: 4, borderColor: 'lightgrey' }} containerStyle={{ width: 190, height: 300, borderRadius: 5 }} onPress={() => this.props.navigation.navigate('BookInfo', {
                                                                data: item,
                                                                username: username
                                                            })}>
                                                                <Image containerStyle={{ borderTopRightRadius: 5, borderTopLeftRadius: 5 }} style={{ width: '100%', aspectRatio: 1 }} source={{ uri: "data:image/png;base64," + item.Image }}></Image>
                                                                <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 5, color: '#BFD7EA' }}>{item.Price}€</Text>
                                                                <Text style={{ color: '#BFD7EA' }}>
                                                                    {item.Description.length >= 20 ? <Text>{item.Description.substring(0, 20)}...</Text> : item.Description}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                )
                                            }}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    )
                }
            }
        }
        return (
            <>
                {booklist()}
            </>
        );
    }
}