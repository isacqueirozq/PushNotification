import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { InputNumeric } from './Input';

export default function RelatorioCampo() {
    return(
        <View style={styles.conteiner}>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.itens}>Publicações</Text>
                    <Text style={styles.subItens}>Mês anterior:</Text>
                </View>
                <InputNumeric/>
            </View>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.itens}>Videos</Text>
                    <Text style={styles.subItens}>Mês anterior:</Text>
                </View>
                <InputNumeric/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        width: '90%',
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#fff'
    },
    row:{
        flexDirection:'row',
        flexWrap: "nowrap",
        justifyContent:"space-between",
        borderStyle:"solid",
        borderRadius:10,
        borderWidth: 1,
        borderColor:'lightgrey',
    },
    itens:{
        fontSize:18,
    },
    subItens:{
        fontSize:10,
    },
    box:{
        alignItems:"center",
        justifyContent:"center",
        width:"58%",
        height:60,
    }
})