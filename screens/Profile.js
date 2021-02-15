import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    render() {
        const username = this.props.route.params.username;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1D263B' }}>
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                    <StatusBar barStyle="dark-content" />
                    <View style={{ margin: 50 }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#BFD7EA', flex: 0.55 }}> Profile and Settings </Text>
                        <View style={styles.contenidor}>
                            <View style={styles.section1}>
                                <Button icon={
                                    <Icon name="chat" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Chat' onPress={() => this.props.navigation.navigate('MyChats', { username: username })} > </Button>
                            </View>
                            <View style={styles.section2}>
                                <Button icon={
                                    <Icon name="book" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='My books' onPress={() => this.props.navigation.navigate('MyAds', { username: username })} > </Button>
                            </View>
                            <View style={styles.section3}>
                                <Button icon={
                                    <Icon name="exit-to-app" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Exit' onPress={() => this.props.navigation.navigate('Login', { username: username })} > </Button>
                            </View>
                            <View style={styles.section4}>
                                <Button icon={
                                    <Icon
                                        name="create"
                                        size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} disabled={true} title='EditProfile (next versions...)' onPress={() => this.props.navigation.navigate('EditProfile', { username: username })} > </Button>
                            </View>
                            <View style={styles.section5}>
                                <Button icon={
                                    <Icon name="help" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Help' onPress={() => this.props.navigation.navigate('Help', { username: username })} > </Button>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    section1: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'center',
    },
    section2: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
    section3: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
    section4: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
    section5: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
});