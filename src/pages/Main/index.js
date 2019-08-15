import React, { Component } from 'react'

import { 
  View, 
  Text, 
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert 
} from 'react-native'

import * as Progress from 'react-native-progress';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'

import api from '../../services/api'

import logo from '../../assets/logo.png'

export default class Main extends Component {

  state = {
    user: null,
  }

  static navigationOptions = {
    title: "ToDo's",
  };

  toLogin = () => {
    this.props.navigation.navigate('Todo', {user: this.state.user});
  };

  populate = async () => {
    const getUser = await AsyncStorage.getItem('@todos:_id');
    try {
      const user = await api.get(`/user/${getUser}`)
      this.setState({user: user.data})
    } catch(err){
      console.log(err)
    }
  }

  async componentWillReceiveProps(){
    this.populate()
  }

  async componentDidMount(){
    this.populate()
  }

   asyncAlert = async (item) => new Promise((resolve) => {
    const _id = this.state.user._id
    Alert.alert(
      'Excluir',
      'Apagar esta tarefa? ',
      [
        {
          text: 'Não',
          onPress: () => {
            resolve(false);
          },
        },
        {
          text: 'Sim',
          onPress: async () => {
            await api.delete(`/user/${_id}/todo/${item._id}`)
            const user = await api.get(`/user/${_id}`)
            this.setState({user: user.data})
            resolve(true);
          },
        }
      ],
      { cancelable: false },
    );
  });

  handleDone = async (item) => {
    const _id = this.state.user._id
    await api.post(`/user/${_id}/todo/${item._id}`)
    const user = await api.get(`/user/${_id}`)
    this.setState({user: user.data})
  }

  renderItem = ({item}) => (
    <View
      key={item._id}
      style={styles.file}>
      <View style={styles.fileInfo}>
      <Icon name={item.done ? "smile-o" : "frown-o"} size={30} color="rgb(187, 90, 90)" />
        <Text style={item.done ? styles.fileTitleLine : styles.fileTitle}>{item.title}</Text>
      </View>

      <View style={styles.fileOptions}>
        <TouchableOpacity
        onPress={async () => await this.asyncAlert(item) }>
          <Icon name="trash-o" size={30} color="rgb(187, 90, 90)" />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => this.handleDone(item)}>
          <Icon name={item.done ? "check-square-o" :"square-o"} size={30} color="rgb(187, 90, 90)" />
        </TouchableOpacity>
      </View>
    </View>
  )

  render() {
    const { user } = this.state
    return (
      <View style={styles.container}>
        {!user ? (
            <Progress.Circle size={30} indeterminate={true} />
        ) : (
          <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.boxTitle}>Olá {user.username}</Text>
    
            <FlatList 
              data={user.todos}
              style={styles.list}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={this.renderItem}
            />
            <TouchableOpacity style={styles.fab} onPress={this.toLogin}>
              <Text style={styles.addTodo}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}
