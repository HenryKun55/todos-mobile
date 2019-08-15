import React, { Component } from 'react'

import Toast, { DURATION } from 'react-native-easy-toast'

import { 
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableOpacity 
} from 'react-native'

import GeneralStatusBarColor from '../../components/StatusBar'

import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

import api from '../../services/api'

import logo from '../../assets/logo.png'

export default class Login extends Component {

    state = {
        title: '',
        user: null
    }

    static navigationOptions = {
        title: "Add ToDo",
    };

    toMain = () => {
        this.props.navigation.navigate('Main', { user: this.state.user});
    };

    handleTitleChange = (title) => {
        this.setState({ title });
    };

    handleSubmit = async () => {
        const { user } = this.props.navigation.state
        if(this.state.title.length === 0 ) {
            this.refs.toast.show('Preencha o nome da tarefa' , 2000)
        } else {
            try {
                const _id = await AsyncStorage.getItem('@todos:_id');
                const response = await api.post(`user/${_id}/todo`, {
                    title: this.state.title,
                });

                this.toMain()
            } catch (err) {
                console.log(err)
                this.refs.toast.show('Ocorreu um erro, tente novamente', 2000)
            }
        }
    } 

    render() {
        return ( 
            <View style={styles.container}>
                <Image style={styles.logo} source={logo}/>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={this.state.title}
                    onChangeText={this.handleTitleChange}
                    blurOnSubmit={false}
                />
                <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                <Toast 
                    ref="toast"
                    position="top"
                    style={styles.toast}
                    textStyle={styles.toastText}
                    fadeInDuration={200}
                    fadeOutDuration={200}
                />
            </View>
        )
    }
}
