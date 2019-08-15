import React, { Component } from 'react';
import Toast, { DURATION } from 'react-native-easy-toast'

import GeneralStatusBarColor from '../../components/StatusBar'

import AsyncStorage from '@react-native-community/async-storage'

import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity 
} from 'react-native'

import logo from '../../assets/logo.png'

import styles from './styles'

import api from '../../services/api';

export default class SignUp extends Component {
  
  state = {
    username: '',
    password: '',
    repassword: '',
    error: '',
    disabled: true,
  };

  async componentDidMount(){
    const user = await AsyncStorage.getItem('@todos:_id');
    if(user) this.toMain()
  }

  toLogin = () => {
    this.props.navigation.navigate('Login');
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

  handleRepasswordChange = (repassword) => {
    this.setState({ repassword });
  };

  // handleBackToLoginPress = () => {
  //   this.props.navigation.goBack();
  // };

  handleSignUp = async () => {
    if ( this.state.username.length === 0 || this.state.password.length === 0 || this.state.repassword.length === 0 ) {
      this.refs.toast.show('Insira todos os dados' , 2000)
    } else {
      if(this.state.password === this.state.repassword) {
        try {
          await api.post('/user', {
            username: this.state.username,
            password: this.state.password,
          });
          this.toLogin()
        } catch (_err) {
          this.refs.toast.show('Ocorreu um erro, tente novamente', 2000)
        }
      } else {
        this.refs.toast.show('Confira sua senha', 2000)
      }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
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
            onSubmitEditing={() => this.repassword.focus()}
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            secureTextEntry
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={this.state.repassword}
            ref={ref => (this.repassword = ref)}
            onChangeText={this.handleRepasswordChange}
            blurOnSubmit={false}
            // onSubmitEditing={() => this.button.focus()}
          />
        <TouchableOpacity 
          onPress={this.handleSignUp}  
          style={styles.buttonSign}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={this.toLogin} style={styles.buttonLogin}>
          <Text style={styles.buttonTextLogin}>Go to login</Text>
        </TouchableOpacity>
      </View>
      <Toast 
        ref="toast"
        position="top"
        style={styles.toast}
        textStyle={styles.toastText}
        fadeInDuration={200}
        fadeOutDuration={200}
      />
    </View>
    );
  }
}