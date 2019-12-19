/*Example of SQLite Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/Main/HomeScreen';
import RegisterUser from './pages/Main/RegisterUser';
import UpdateUser from './pages/Main/UpdateUser';
import ViewUser from './pages/Main/ViewUser';
import ViewAllUser from './pages/Main/ViewAllUser';
import DeleteUser from './pages/Main/DeletUser';
 
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: '                            Bem-Vindo',
      headerStyle: { backgroundColor: '#211f1f', },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: '            Visualizar Usuário',
      headerStyle: { backgroundColor: '#211f1f', },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: '             Visualizar Todos',
      headerStyle: { backgroundColor: '#211f1f', },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: '                     Alterar',
      headerStyle: { backgroundColor: '#211f1f', },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: '                   Cadastro',
      headerStyle: { backgroundColor: '#211f1f', },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: '                     Excluir',
      headerStyle: { backgroundColor: '#211f1f', },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);