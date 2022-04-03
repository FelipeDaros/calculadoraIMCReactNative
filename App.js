import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  

  function somar(){
    if(num1 == null | num1 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    
    if(num2 == null | num2 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    const result = num1 + num2;
    setResultado(result);
  }

  function subtrair(){
    if(num1 == null | num1 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    
    if(num2 == null | num2 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    const result = num1 - num2;
    setResultado(result);
  }

  function multiplicar(){
    if(num1 == null | num1 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    
    if(num2 == null | num2 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    const result = num1 * num2;
    setResultado(result);
  }

  function dividir(){
    if(num1 == null | num1 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    
    if(num2 == null | num2 == 0){
      Alert.alert("Os campos devem estar prenchidos antes de efetuar o cálculo");
    }
    const result = num1 / num2;
    setResultado(result);
  }

  function limpar(){
    setResultado(0);
    setNum1(0);
    setNum2(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textCalc}>Calculadora</Text>
      <View style={styles.numeroContainer}>
        <Text style={styles.textNumero}>Informe o primeiro número</Text>
        <TextInput style={styles.textNumeroInput} value={num1} keyboardType="numeric" onChangeText={(n) => {setNum1(n)}}/>
        <Text style={styles.textNumero}>Informe o segundo número</Text>
        <TextInput style={styles.textNumeroInput} value={num2} keyboardType="numeric" onChangeText={(o) => {setNum2(o)}}/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons} onPress={() => somar()}><Text style={styles.buttonText}>Somar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => subtrair()}><Text style={styles.buttonText}>Subtrair</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => multiplicar()}><Text style={styles.buttonText}>Multiplicar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => dividir()}><Text style={styles.buttonText}>Dividir</Text></TouchableOpacity>
      </View>
      {resultado == 0 ? <></> : 
      <View style={styles.resultadoContainer}>
        <Text style={styles.textNumero}>Resultado</Text>
        <Text style={styles.textResultado}>{resultado}</Text>
        <TouchableOpacity style={styles.buttons} onPress={() => limpar()}><Text style={styles.buttonText}>Limpar</Text></TouchableOpacity>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006494'
  },
  textCalc: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30
  },
  numeroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNumero:{
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16
  },
  textNumeroInput: {
    fontSize: 22,
    color: '#1b98e0',
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  buttons: {
    backgroundColor: '#1b98e0',
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },
  resultadoContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResultado: {
    fontWeight: 'bold',
    margin: 5,
    fontSize: 18,
    color: 'red'
  }
});
