import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { InputNumeric, InputText } from './Input';

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
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.itens}>Horas</Text>
                    <Text style={styles.subItens}>Mês anterior:</Text>
                </View>
                <InputNumeric/>
            </View>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.itens}>Revisitas</Text>
                    <Text style={styles.subItens}>Mês anterior:</Text>
                </View>
                <InputNumeric/>
            </View>
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.itens}>Estudos</Text>
                    <Text style={styles.subItens}>Mês anterior:</Text>
                </View>
                <InputNumeric/>
            </View>
            <View style={styles.colum}>
                <View style={styles.columBox}>
                    <Text style={styles.columItens}>Obs</Text>
                    <InputText/>
                </View>
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
        marginBottom:5,
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
    },
    colum:{
        marginBottom:5,
    },
    columBox:{
        borderStyle:"solid",
        borderRadius:10,
        borderWidth: 1,
        borderColor:'lightgrey',
    },
    columItens:{
        fontSize:18,
        paddingLeft:10,
    },
})