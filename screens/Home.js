import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ButtonFloat from '../components/BotaoFlutuante';
import * as Device from 'expo-device';

import Card from '../components/Card';

export default function HomeScreen({navigation}) {
  const deviceDados = {
    "Nome": Device.deviceName,
    "Modelo": Device.modelName,
    "Os": Device.osName,
    "Api": Device.platformApiLevel
  } 
  // console.log(deviceDados);
  return (
    <View style={styles.container}>
      <Text >Primeira Página.</Text>
      <Card dados = {deviceDados}/>
      <ButtonFloat onPress={() => navigation.navigate('Relatorio de Campo')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});