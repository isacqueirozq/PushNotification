import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function RelatorioScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Segunda Página</Text>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
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