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
        username: '',
        password: '',
    }

    static navigationOptions = {
        title: "Login",
      };

    toMain = () => {
        this.props.navigation.navigate('Main');
    };

    handleUsernameChange = (username) => {
        this.setState({ username });
    };
    
    handlePassowrdChange = (password) => {
        this.setState({ password });
    };

    handleSubmit = async () => {
        if(this.state.username.length === 0 || this.state.password.length === 0) {
            this.refs.toast.show('Insira todos os dados' , 2000)
        } else {
            try {
                const response = await api.post('login', {
                    username: this.state.username,
                    password: this.state.password,
                });

                await AsyncStorage.setItem('@todos:_id', response.data._id);

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
                    placeholder="Username"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={this.state.username}
                    onChangeText={this.handleUsernameChange}
                    blurOnSubmit={false}
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={this.state.password}
                    ref={ref => (this.password = ref)}
                    onChangeText={this.handlePassowrdChange}
                    blurOnSubmit={false}
                />
                <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
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
