import React,{useState} from 'react';
import { View,StyleSheet, TextInput, } from 'react-native';
import { CreatePublicador } from '../js/act';
import Botao from './Botao';


function PublicadorCreate(props) {
    const [nome,setNome] = useState('')
    const [nascimento,setNascimento] = useState('')
    const [batismo,setBatismo] = useState('')
    const [telefone,setTelefone] = useState('')
    let dados = [nome,nascimento,batismo,telefone]
    return(
        <View style={styles.conteiner}>
            <TextInput style={styles.input} placeholder={"Nome Completo"} onChangeText={(e) => setNome(e)}/>
            <TextInput style={styles.input} placeholder={"Data de Nascimento"} onChangeText={(e) => setNascimento(e)}/>
            <TextInput style={styles.input} placeholder={"Batismo"} onChangeText={(e) => setBatismo(e)}/>
            <TextInput style={styles.input} placeholder={"Telefone"} onChangeText={(e) => setTelefone(e)}/>
            <Botao title={'Salvar'} onPress={()=>CreatePublicador(dados)}/>
            
        </View>
    );

}

const styles = StyleSheet.create({
    conteiner:{
        paddingLeft:15,
        paddingTop:15,
        marginRight:15,
    },
    input:{
        fontSize:18,
        padding:10,
        paddingLeft:20,
        marginTop:10,
        textAlign: 'left',
        backgroundColor:'white',
    }
})


export default PublicadorCreate;