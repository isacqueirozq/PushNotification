import * as React from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Botao from '../components/Botao';

export default function CongScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sua Congregação</Text>
            <View style={styles.component}>
                <TextInput style={styles.input} placeholder='Nome da Congregação'/>
                <TextInput style={styles.input} placeholder='N° da  Congregação'/>
                <TextInput style={styles.input} placeholder='Nome do Secretário'/>
                <Botao title={"Salvar"} onPress={()=>console.log("Gravado Congregação")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        padding: 15,
    },
    component: {
        margin: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input:{
        fontSize:18,
        width:"100%",
        marginBottom:10,
        textAlign: 'center',
        backgroundColor:"#fff",
        padding:10,
        borderRadius:10,
    }
})