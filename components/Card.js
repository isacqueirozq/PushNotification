import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  const dados = props.dados;
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
        <Text style={{fontSize:20}}>Olá {dados.User}{'\n'}{'\n'}</Text>
        <Text >INFORMAÇÕES DO DISPOSITIVO{'\n'}</Text>
        <Text>Aparelho: {dados.Nome}{'\n'}</Text>
        <Text>Modelo: {dados.Modelo}{'\n'}</Text>
        <Text> OS: {dados.Os}{'\n'}</Text>
        <Text>API: {dados.Api}</Text>
      </Text>
      <Image style={styles.logo} source={require('../assets/img/icon.png')} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'#f6f6f6',
    
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius:25
  }
});