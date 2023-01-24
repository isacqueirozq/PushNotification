import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, Pressable,} from 'react-native';
import { InputNumeric, InputText } from './Input';

export default function RelatorioCampo(props) {

    const monthNames = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const [month,setMonth] = useState(new Date().getMonth())
    const [year,setYear] = useState(new Date().getFullYear())
    // const [data,setData] = useState(month+"/"+year)
    const previus = () =>{
        if (month<1) {
            setMonth(11)
            setYear(year-1)
        } else {
            setMonth(month-1)
        }
    }
    const next = () =>{
        if (month>10) {
            setMonth(0)
            setYear(year+1)
        } else{
        setMonth(month+1)
        }
    }

    return(
        <View style={styles.conteiner}>
            <View style={styles.rowTitle}>
                <View style={styles.boxTitle}>
                    <View style={styles.boxMes}>
                        <Pressable onPress={previus} style={styles.btn}>
                            <Text style={{fontSize:15,textAlign:"center"}}>◀</Text>
                        </Pressable> 
                        <Text style={{fontSize:15,width:"35%",textAlign:"center"}}>{monthNames[month]+"/"+year}</Text>
                        <Pressable onPress={next} style={styles.btn}>
                           <Text style={{fontSize:15,textAlign:"center"}}>▶</Text>  
                        </Pressable>
                    </View>
                    <View style={styles.boxNome}>
                        <InputText placeholder={props.Nome} style={styles.itensTitle}/>
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
        flexDirection:'row',
        marginBottom:15,
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
        height:100,
        width:"100%",
    },
    boxMes:{
        flexDirection:'row',
        justifyContent:"flex-end",
        
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
    btn:{
       width:50,
    }
})