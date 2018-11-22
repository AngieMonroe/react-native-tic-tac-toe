import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';



export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

// Se realiza un objeto con las diferentes vistas que tendrá la aplicación
const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen

});

//El objeto se envuelve en un contenedor que será el encargado de mostrar las diferentes vistas en el App
const AppContainer = createAppContainer(AppNavigator);



