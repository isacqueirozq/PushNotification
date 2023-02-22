import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {useAsyncStorage} from "@react-native-async-storage/async-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonFloat from '../components/BotaoFlutuante';
import * as Device from 'expo-device';
import Card from '../components/Card';
import { Dialog,Button } from '@rneui/themed';

export default function HomeScreen({navigation}) {
  //VARIAVEIS
  const [dialog, setDialog] = useState(false); 
  const toggleDialog = () => {
    setDialog(!dialog);
  };

  const {getItem,setItem}= useAsyncStorage("@publicador:configuracao")
  const [name,setName] = useState(null);
  
  async function newConfig(){
    try {
      const id = 1 
      const newData = {
          id,
          name,
      }

      //Buscar o que existe para gravar junto com o novo
      const response = await getItem()
      const previousData = response ? JSON.parse(response) : []
      const data = [...previousData,newData]

      // gravar
      await setItem(JSON.stringify(data))
      alert("Seja bem vindo(a) "+name)
      toggleDialog()
    } catch (error) {
      console.log(error);
      alert("ERRO: NÃO CADASTRADO")
    }
  }
  async function getConfig(){
    const response = await getItem()
    // Se o response existir(?) mostre o valor se não(:) mostre objeto vazio {}
    const data = response ? JSON.parse(response):"Não encontrado"
    const myName = data[0].name
    if (myName) {
      setName(myName)
    } else {
      toggleDialog()
    }
  }
  async function removeAllConfig(){
    await AsyncStorage.clear()
    getConfig()
  }

  //OBJETOS
  const deviceDados = {
    "User":name,
    "Nome": Device.manufacturer,
    "Modelo": Device.modelName,
    "Os": Device.deviceName +" "+Device.osVersion,
    "Api": Device.platformApiLevel
  } 

  useEffect(()=>{
    //removeAllConfig() //resetar
    getConfig() // VERIFICA O BANCO DE DADOS SE HÁ ALGO CADASTRADO
  },[])
  
  return (
    <View style={styles.container}>
      {/* MODAL - GET NAME USER */}
      <Dialog isVisible={dialog} onBackdropPress={toggleDialog}>
          <Dialog.Title title="Nome do Publicador"/>
          <View style={styles.columBox} >
            <TextInput 
            style={styles.columItens}
            placeholder='Nome Completo'
            onChangeText={setName}
            value={name}
            />
          </View>
          <Button
            title="Salvar"
            onPress={newConfig}
            buttonStyle={styles.button}
          />
      </Dialog>

      {/* CARD DE OPÇÃO VARIÁVEL */}
      <Card dados = {deviceDados}/>

      {/* FLOAT BUTTON */}
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
  columBox:{
    marginTop:20,
    borderStyle:"solid",
    borderRadius:10,
    borderWidth: 1,
    borderColor:'lightgrey',
    width:"100%",
  },
  columItens:{
    fontSize:18,
    padding:10,
    textAlign:"center",
  },
  button: {
  borderRadius: 6,
  width: 220,
  margin: 20,
  },
});