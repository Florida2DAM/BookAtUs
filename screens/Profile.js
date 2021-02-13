import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'maboto01'
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
                    <StatusBar barStyle="dark-content" />
                    <View style={{ margin: 50 }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333', flex: 0.55 }}> Profile and Settings </Text>
                        <View style={styles.contenidor}>
                            <View style={styles.seccio2}>
                                <Button icon={
                                    <Icon name="chat" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Chat' onPress={() => this.props.navigation.navigate('MyChats', { username: this.state.username })} > </Button>
                            </View>
                            <View style={styles.seccio3}>
                                <Button icon={
                                    <Icon name="favorite" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Favorites' onPress={() => this.props.navigation.navigate('Favorites', { username: this.state.username })} > </Button>
                            </View>
                            <View style={styles.seccio4}>
                                <Button icon={
                                    <Icon name="exit-to-app" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Exit' onPress={() => this.props.navigation.navigate('Login', { username: this.state.username })} > </Button>
                            </View>
                            <View style={styles.seccio5}>
                                <Button icon={
                                    <Icon
                                        name="create"
                                        size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='EditProfile' onPress={() => this.props.navigation.navigate('EditProfile', { username: this.state.username })} > </Button>
                            </View>
                            <View style={styles.seccio6}>
                                <Button icon={
                                    <Icon name="help" type size={30} color="#ffffff"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#ffffff" }} title='Help' onPress={() => this.props.navigation.navigate('Help', { username: this.state.username })} > </Button>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contenidor: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        alignContent: 'space-around',
        alignItems: 'center',
    },
    seccio1: {
        flex: 1,
        fontSize: 12,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'right',
    },
    seccio2: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'center',
    },
    seccio3: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
    seccio4: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
    seccio5: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
    seccio6: {
        flex: 1,
        fontSize: 350,
        fontWeight: '600',
        width: 350,
        margin: 4,
        padding: 12,
        textAlign: 'left',
    },
});