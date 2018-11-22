import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

// En nuestro primer componente. Se mostrarán dos input para recolectar el nombre de los jugadores
class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            player1: '',
            player2: ''
        }
    }

  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
        <Text style={styles.title}>¿Quién va a jugar?</Text>
        <Text style={styles.text}> Jugador 1 </Text>
        <TextInput style={{height: 40, width: 200, borderColor: 'blue', borderWidth: 1, paddingLeft: 10, fontSize: 20}}
         onChangeText={(player1) => this.setState({player1})}
         value={this.state.player1}/> 
        <Text style={styles.text}> Jugador 2 </Text>
        <TextInput style={{height: 40, width: 200, borderColor: 'yellow', borderWidth: 1, paddingLeft: 10, fontSize: 20}}
         onChangeText={(player2) => this.setState({player2})}
         value={this.state.player2}/>
         {/* Por medio de el objeto navigation se envian el estado que se empleara en el componente Home
        donde inicia el juego */}
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home', {
          player1: this.state.player1, 
          player2: this.state.player2}
          )}>
            <Text style={styles.textBtn}>¡Iniciar! </Text>
        </TouchableOpacity> 
        </View>
        </ScrollView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  background:{
    backgroundColor: '#BFC4C6',
  },
  title:{
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  text: {
      fontSize: 30,
      margin: 10,

  },

  btn:{
    width: 200,
    height: 60,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  
  textBtn:{
    color: '#66d9ff',
    fontSize: 40,
  },

});

