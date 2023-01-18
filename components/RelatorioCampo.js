import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Pressable,} from 'react-native';
import { InputNumeric, InputText } from './Input';

export default function RelatorioCampo() {
    const data =()=>{
        alert("Clicou")
    };
    return(
        <View style={styles.conteiner}>
            <View style={styles.rowTitle}>
                <View style={styles.boxTitle}>
                     <View style={styles.boxMes}>
                        <Pressable onPress={data}>
                            <Text tyle={styles.subTitle}>
                                Janeiro 2023
                            </Text>
                        </Pressable>
                     </View>
                     <View style={styles.boxNome}>
                        <InputText placeholder={"Nome completo"} style={styles.itensTitle}/>
                     </View>
                </View>    
            </View>
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
                    <Text style={styles.columItens}>Obs:</Text>
                    <InputText 
                    placeholder={"Digite aqui"}
                    style={styles.itensTitle}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
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
    rowTitle:{
        // padding:10,
        flexDirection:'row',
        // borderStyle:"solid",
        // borderRadius:10,
        // borderWidth: 1,
        // borderColor:'lightgrey',
        marginBottom:15,
        // backgroundColor:"lightblue"
    },
    itens:{
        fontSize:18,
    },
    itensTitle:{
        textAlign: "center",
        borderRadius:10,
        // backgroundColor:"#f6f6f6",
        height:50,
        // margin:12,
        fontSize:20,
    },
    subItens:{
        fontSize:10,
    },
    subTitle:{
        fontSize:10,
    },
    box:{
        alignItems:"center",
        justifyContent:"center",
        width:"58%",
        height:60,
    },
    boxTitle:{
        justifyContent:"center",
        height:80,
        width:"100%",
    },
    boxMes:{
        // backgroundColor:"purple",
        alignItems:"flex-end",
        marginBottom:5,
    },
    boxNome:{
        // backgroundColor:"pink",
        borderStyle:"solid",
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:10,
        alignItems:"center",
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
        paddingLeft:20,
        paddingTop:10,
    },
    button:{
        marginTop:10,
        height:50,
        borderRadius:10,
        backgroundColor:"purple",
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText:{
        color:"white",
        fontSize:18,
    },
})