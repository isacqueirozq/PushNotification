import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Card(props) {
  const dados = props.dados;
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        <Text >Dados deste aparelho.</Text>
        <Text>Aparelho: {dados.Nome},</Text>
        <Text>Modelo: {dados.Modelo}</Text>
        <Text> OS: {dados.So}</Text>
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
    backgroundColor:'#ff03',
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