import * as React from 'react';
import {FlatList, Button, Text, View,ScrollView,SafeAreaView,
     StyleSheet, TextInput, TouchableOpacity,upCase } from 'react-native';
import * as Device from 'expo-device';
import Ionicons from 'react-native-vector-icons/Ionicons';
import uuid from "react-native-uuid";
import {useAsyncStorage} from "@react-native-async-storage/async-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonFloat from '../components/BotaoFlutuante';

function DeviceDetails() {
    return(
        <View>
        <Text>Aparelho: {Device.manufacturer}</Text>
        <Text>Modelo:  {Device.modelName} </Text>
        <Text> OS: {Device.deviceName+" "+Device.osVersion}</Text>
        <Text>API: {Device.platformApiLevel}</Text>
        </View>
    )
}

/*****************************/
/*****************************/
async function CreatePublicador({data}) {
  const name = data.nome;
  const batismo = data.batismo;
  const nascimento = data.nascimento
  const telefone = data.telefone
  const {getItem,setItem}= useAsyncStorage("@publicador:publicadores")
  try {
    const id = uuid.v4() //Gerar uma chave id aleatória
    const newData = {id,name,nascimento,batismo,telefone}
    console.log(newData);
    //Buscar o que existe para gravar junto com o novo
    const response = await getItem()
    const previousData = response ? JSON.parse(response) : []
    const data = [...previousData,newData]

    // Gravar
    await setItem(JSON.stringify(data))
    alert("Publicador "+data.nome+" cadastrado com sucesso")
    
  } catch (error) {
    console.log(error);
    alert("ERRO: NÃO CADASTRADO")
  } 
}

function ListaPublicadores({style}) {
    const persons = [
  {
	id: "1",
	name: "Earnest Green Sanderson Baudwing Jessy",
  nascimento:"19/12/1985",
  batismo:"18/02/2002",
  pioneiro:"Regular"
  },
  {
	id: "2",
	name: "Winston Orn",
  nascimento:"",
  batismo:"",
  pioneiro:""
  },
  {
	id: "3",
	name: "Carlton Collins",
  },
  {
	id: "4",
	name: "Malcolm Labadie",
  },
  {
	id: "5",
	name: "Michelle Dare",
  },
  {
	id: "6",
	name: "Carlton Zieme",
  }
];
    return(
        <SafeAreaView>
          <FlatList 
              data={persons}
              renderItem={({ item }) => 
              
              <View style={style.card}>
                <View><Ionicons name={'person'} size={60} color={'white'} /></View>
                <View style={style.boxTitle}>
                  <Text style={style.item}>{item.name}</Text>  
                  <View style={style.boxLegend}>
                    <Text style={style.legend}>Nasc:{item.nascimento}</Text>
                    <Text style={style.legend}>Batismo:{item.batismo}</Text>
                    <Text style={style.legend}>{item.pioneiro}</Text>
                  </View>                
                </View>
                
                
              </View>
              
            }
              keyExtractor={(item) => item.id}
          />
          
        </SafeAreaView>
    )
}

export {DeviceDetails,ListaPublicadores,CreatePublicador}