import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text >Primeira Página</Text>
      <Button
        title="Ir para Relatórios"
        onPress={() => navigation.navigate('Relatorio de Campo')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});