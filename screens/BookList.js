import axios from 'axios';
import React, { Component } from 'react';
import { View, Button, Text, StatusBar, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon, Header } from 'react-native-elements'

export class BookList extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: '',
            category: 'Dark Novel',
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
        const booklist = () => {
            if (this.state.loading == true) {
                return (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ marginTop: 40, fontSize: 40, padding: 50 }}>Loading books</Text>
                        <Image
                            source={{ uri: 'https://i.imgur.com/ukqcyRa.gif' }}
                            style={{ width: 200, height: 200 }}
                        />
                        <Image
                            source={{ uri: 'https://i.imgur.com/eMszLvR.png' }}
                            style={{ width: 300, height: 100, marginTop: 90 }}
                        />

                    </View>
                )
            } else {
                if (this.state.showbook == false) {
                    return (
                        <ScrollView>
                            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
                                <StatusBar barStyle="dark-content" />
                                <View style={{ margin: 50 }}>
                                    <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333', flex: 0.20 }}> Book Categories </Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Card containerStyle={{ width: 175 }}>
                                            <Button title='Fantasy' onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=2'), this.changeCategory('Fantasy') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/BiKQwmUs.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=2'), this.changeCategory('Fantasy') }}></Image>
                                        </Card>
                                        <Card containerStyle={{ width: 175 }}>
                                            <Button title='Mystery' onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=1'), this.changeCategory('Mystery') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/htzIa7fs.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=1'), this.changeCategory('Mystery') }}></Image>
                                        </Card>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Card containerStyle={{ width: 175 }}>
                                            <Button title='Studies' onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=3'), this.changeCategory('Studies') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/Vaxo1Kos.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=3'), this.changeCategory('Studies') }}></Image>
                                        </Card>
                                        <Card containerStyle={{ width: 175 }}>
                                            <Button title='Romance' onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=4'), this.changeCategory('Romance') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/pWuhhh2s.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=4'), this.changeCategory('Romance') }}></Image>
                                        </Card>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Card containerStyle={{ width: 175 }}>
                                            <Button title='Light novel' onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=5'), this.changeCategory('Light Novel') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/5jjnXtzs.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=5'), this.changeCategory('Light Novel') }}></Image>
                                        </Card>
                                        <Card containerStyle={{ width: 175 }}>
                                            <Button title='Dark novel' onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/Product?category=6'), this.changeCategory('Dark Novel') }} />
                                            <Image source={{ uri: 'https://i.imgur.com/gtxJeHys.jpg' }} style={{ width: 143, height: 130 }} onPress={() => { this.loadBooks('http://10.0.2.2:7010/api/get/Category?category=6'), this.changeCategory('Dark Novel') }}></Image>
                                        </Card>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    )
                } else {
                    return (
                        <View>
                            <Header
                                placement="left"
                                leftComponent={<Icon
                                    containerStyle={{ marginTop: 10 }}
                                    name='arrow-with-circle-left'
                                    type='entypo'
                                    color='white'
                                    size={35}
                                    onPress={() => this.setState({ showbook: false })}
                                />}
                                centerComponent={{ text: 'Category: ' + this.state.category, style: { color: '#fff', fontSize: 30, marginTop: 5 } }}
                            />


                            <View>
                                <ScrollView>
                                    <FlatList
                                        data={this.state.books}
                                        scrollEnabled={true}
                                        numColumns={2}
                                        renderItem={
                                            ({ item }) => {
                                                return (
                                                    <View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Card containerStyle={{ width: 175 }}>
                                                                <Card.Title>{item.Title}</Card.Title>
                                                                <Card.Divider />
                                                                <Card.Image source={{ uri: "data:image/png;base64," + item.Image }}>
                                                                </Card.Image>
                                                                <Text style={{ marginBottom: 10 }}>
                                                                    {item.Description}
                                                                </Text>
                                                                <Text style={{fontWeight:'bold', fontSize: 20, alignSelf: 'flex-end'}}>{item.Price}€</Text>
                                                                <Button
                                                                    icon={<Icon name='code' color='#ffffff' />}
                                                                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                                                    title='VIEW NOW' />
                                                            </Card>
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