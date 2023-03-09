import * as React from 'react';
import { View,StyleSheet, SafeAreaView } from 'react-native';
import ButtonFloat from '../components/BotaoFlutuante';
import { ListaPublicadores } from '../js/act';

export default function PublicadoresScreen({navigation}){
  return(
    <SafeAreaView style={styles.container}>
      
      <ListaPublicadores style={styles}/>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    fontSize: 15,
    color: 'white',
    marginTop: 5,
  },
  card:{
    backgroundColor:"#86a64b",
    marginTop:3,
    padding:5,
    flexDirection: "row",
  },
  legend:{
    fontSize:12,
    color: 'white',
  },
  boxLegend:{
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop:5,
    
  },
  boxTitle:{
    flexDirection: "column",
    marginTop:5,
  }
});