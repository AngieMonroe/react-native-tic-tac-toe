import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class TicTacToe extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameState: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ],
      currentPlayer : 1
    }
  }

  componentDidMount = () => {
    this.startGame();
  }

  startGame = () => {
    this.setState({ gameState :
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    currentPlayer: 1,
  });
  }
  
  getWinner = () => {
    const winnerPoints = 3;
    const arrayWinner = this.state.gameState;
    let sum;

    // Validando las filas
    for(let i = 0; i < winnerPoints; i++) {
      sum = arrayWinner[i][0] + arrayWinner[i][1] + arrayWinner[i][2];
      if (sum === 3) { return 1; }
      else if (sum === -3 ) { return -1;}
    }

    // Validando las columnas
    for(let i = 0; i < winnerPoints; i++) {
      sum = arrayWinner[0][i] + arrayWinner[1][i] + arrayWinner[2][i];
      if (sum === 3) { return 1; }
      else if (sum === -3 ) { return -1;}
    }

    //Validando diagonales
    sum = arrayWinner[0][0] + arrayWinner[1][1] + arrayWinner[2][2];
    if (sum === 3) { return 1; }
    else if (sum === -3 ) { return -1;}

    sum = arrayWinner[2][0] + arrayWinner[1][1] + arrayWinner[0][2];
    if (sum === 3) { return 1; }
    else if (sum === -3 ) { return -1;}

    //Nadie gana
    return 0;

  }

  onSquarePress = (row, col) => {
    const value = this.state.gameState[row][col];
    if (value !== 0) { return; }

    const currentPlayer = this.state.currentPlayer;
    const arrayGame = this.state.gameState.slice();
    arrayGame[row][col] = currentPlayer;
    this.setState({gameState: arrayGame});

    const nextPlayer = (currentPlayer === 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer})

    //Quien es el ganador
    const winner = this.getWinner();
    if (winner === 1){ 
      Alert.alert ('Ganó el jugador 1');
      this.startGame();
    } else if ( winner === -1){
      Alert.alert('Ganó el jugador 2');
      this.startGame();
    }
  }

  renderIcon = (row, col) => {
    const value = this.state.gameState[row][col];
    switch(value){
      case 1 : return  <FontAwesome name="close" style={ styles.teamX } />
      case -1 : return <FontAwesome name="circle-o" style={ styles.teamO } />
      default : return <View />
    }    
  }
  onNewGame(){
    this.startGame();
  }

  render() {
    let jugador = this.state.currentPlayer
    if(jugador === -1){
      jugador = 2
    }
    return (
      <View style={styles.container}>
      <Text style={styles.title}>¡Vamos a Jugar!</Text>
      <Text style={styles.text}> El turno es del jugador: {jugador} </Text>       
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onSquarePress(0, 0)} style = {[styles.square, { borderLeftWidth: 0, borderTopWidth: 0}]} >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSquarePress(0, 1)} style = {[styles.square, {  borderTopWidth: 0 }]} >
          {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSquarePress(0, 2)} style = {[styles.square, { borderRightWidth: 0, borderTopWidth: 0}]} >
          {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onSquarePress(1, 0)} style = {[styles.square, { borderLeftWidth: 0 }]}>
          {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSquarePress(1, 1)} style = {[styles.square, { }]}>
          {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSquarePress(1, 2)} style = {[styles.square, { borderRightWidth: 0}]}>
          {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onSquarePress(2, 0)} style = {[styles.square, { borderLeftWidth: 0, borderBottomWidth: 0}]}>
          {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSquarePress(2, 1)} style = {[styles.square, { borderBottomWidth: 0}]}>
          {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onSquarePress(2, 2)} style = {[styles.square, { borderRightWidth: 0, borderBottomWidth: 0}]}>
          {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => this.onNewGame()}>
          <Text style={styles.textBtn}>Nuevo juego </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFC4C6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  square:{
    borderWidth: 8,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamO:{
    color: '#00bfff',
    fontSize:60,
  },

  teamX:{
    color: '#c61aff',
    fontSize:70,
  },

  title:{
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  text:{
    fontSize: 20,
    marginBottom: 20,
  },

  textBtn:{
    color: '#66d9ff',
    fontSize: 30,
  },

  btn:{
    width: 200,
    height: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  }

});
