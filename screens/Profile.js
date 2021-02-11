import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


export class Profile extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', alignItems: 'center', alignContent: 'center' }}>
                    <StatusBar barStyle="dark-content" />
                    <View style={{ margin: 50 }}>
                        <Text style={{ fontFamily: 'Arial', fontSize: 32, textAlign: 'center', color: '#333333', flex: 0.55 }}> Profile and Settings </Text>
                        <View style={styles.contenidor}>
                            <View style={styles.seccio1}>
                                <Button icon={
                                    <Icon name="chat" type size={30} color="#000000"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#000000" }} title='Chat' onPress={() => this.props.navigation.navigate('Chat')} > </Button>
                            </View>
                            <View style={styles.seccio2}>
                                <Button icon={
                                    <Icon name="drive-folder-upload" type size={30} color="#000000"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#000000" }} title='MyAds' onPress={() => this.props.navigation.navigate('MyAds')} > </Button>
                            </View>
                            <View style={styles.seccio3}>
                                <Button icon={
                                    <Icon name="favorite" type size={30} color="#000000"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#000000" }} title='Favorites' onPress={() => this.props.navigation.navigate('Favorites')} > </Button>
                            </View>
                            <View style={styles.seccio4}>
                                <Button icon={
                                    <Icon name="exit-to-app" type size={30} color="#000000"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#000000" }} title='Exit' onPress={() => this.props.navigation.navigate('Login')} > </Button>
                            </View>
                            <View style={styles.seccio5}>
                                <Button icon={
                                    <Icon
                                        name="create"
                                        size={30} color="#000000"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#000000" }} title='EditProfile' onPress={() => this.props.navigation.navigate('EditProfile')} > </Button>
                            </View>
                            <View style={styles.seccio6}>
                                <Button icon={
                                    <Icon name="help" type size={30} color="#000000"></Icon>
                                }
                                    iconContainerStyle={{ margin: 20 }}
                                    titleStyle={{ color: "#000000" }} title='Help' onPress={() => this.props.navigation.navigate('Help')} > </Button>

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