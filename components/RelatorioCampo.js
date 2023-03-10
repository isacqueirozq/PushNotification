import React, {useState,useEffect,useRef} from 'react';
import { Text, View, StyleSheet, Image, Vibration, TouchableOpacity, Pressable, KeyboardAvoidingView, ScrollView,} from 'react-native';
import { InputNumeric, InputText } from './Input';
import {useAsyncStorage} from "@react-native-async-storage/async-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from "react-native-uuid";

export default function RelatorioCampo(props) {

    //***************** SELETOR DE DATA *******************
    const monthNames = [ 
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 
    'Dezembro'
    ];
    const [month,setMonth] = useState(new Date().getMonth())//0 = January e 11 = December
    const [year,setYear] = useState(new Date().getFullYear())
    const previus = () =>{
        const m = month-1
        if (m<0) {
            setMonth(11)
            setPrevMonth(10)
            setYear(year-1)
        }else{
            setMonth(m)
            if (m === 0) {
                setPrevMonth(11)
            }else{
                setPrevMonth(m-1)
            }
        }
        
    }
    const next = () =>{
        const m = month+1
        if (m>11) {
            setMonth(0)
            setPrevMonth(11)
            setYear(year+1)
        }else{
            setMonth(m)
            setPrevMonth(m-1)
        }
        
    } //FIM - SELETOR DE DATA
    
    //*************** FORMULÁRIO - CRUD *********************
    const [result, setResult] = useState(0);
    const itensRelatorio = ["Publications","Videos","Hours","Visity","Estudy"]
    
   /* FUNÇÃO - RECEBE VALOR DO INPUT.JS */ 
    const updateValor = (recebido,colum) =>{
        itensRelatorio.forEach((item)=>{
            if (colum == item) {
                switch (item) {
                    case 'Publications':  
                        setPublications(recebido)
                        break;
                    case 'Videos':   
                        setVideo(recebido)
                        break;
                    case 'Hours':
                        setHours(recebido)
                        break;                        
                    case 'Visity':
                        setVisity(recebido)
                        break;                        
                    case 'Estudy':
                        setEstudy(recebido)
                        break;
                    default:
                        break;
                }
            }
        })  
    }
   
    const [name, setName] = useState("")
    const [publication, setPublications] = useState(0)
    const [video, setVideo] = useState(0)
    const [service, setService] = useState("1") //service: 1-publicador, 2-P. Auxiliar, 3-P. Regular, 4-P. Especial/Missionário
    const [hours, setHours] = useState(0)
    const [visity, setVisity] = useState(0)
    const [estudy, setEstudy] = useState(0)
    const [observation, setObservation] = useState("") 
    const {getItem,setItem}= useAsyncStorage("@publicador:relatorios")
    
    const ONE_SECOND_IN_MS = 400;
    const vibrationConfirm = [
    1 * ONE_SECOND_IN_MS, 
    1 * ONE_SECOND_IN_MS,
    ];

    const [prevPublication, setPrevPublications] = useState(0)
    const [prevVideo, setPrevVideo] = useState(0)
    const [prevService, setPrevService] = useState('') //service: 1-publicador, 2-P. Auxiliar, 3-P. Regular, 4-P. Especial/Missionário
    const [prevHours, setPrevHours] = useState(0)
    const [prevVisity, setPrevVisity] = useState(0)
    const [prevEstudy, setPrevEstudy] = useState(0)
    const [prevMonth, setPrevMonth] = useState(0)

    /*IMPORTA DADOS DO BD-CONFIGURAÇÕES */ 
    async function showConfig(){
        // CARREGA NOME DAS CONFIGURAÇÕES PARA RELATORIOS
        const {getItem,setItem}= useAsyncStorage("@publicador:configuracao")    
        const response = await getItem()
        // Se o response existir(?) mostre o valor se não(:) mostre objeto vazio {}
        const data = response ? JSON.parse(response):"Não encontrado"
        const myName = data[0].name
        if (myName) {
        setName(myName)
        } else {
        
        }
    }
    /*CRIAR NOVO REGISTRO */
    async function newRelatorio(){
        try {
            const id = uuid.v4() //Gerar uma chave id aleatória
            const newData = {
                id,
                name,
                service,
                month,
                year,
                publication,
                video,
                hours,
                visity,
                estudy,
                observation
            }//service: 1-publicador, 2-P. Auxiliar, 3-P. Regular, 4-P. Especial/Missionário

            //Buscar o que existe para gravar junto com o novo
            const response = await getItem()
            const previousData = response ? JSON.parse(response) : []
            const data = [...previousData,newData]

            // gravar
            await setItem(JSON.stringify(data))
            Vibration.vibrate(vibrationConfirm,false)
            alert("Cadastrado com sucesso")
            getRelatorio()
        } catch (error) {
            console.log(error);
            alert("ERRO: NÃO CADASTRADO")
        }
    }
    /*LER LISTA DE REGISTROS */
    async function getRelatorio(){
        const response = await getItem()
        // Se o response existir(?) mostre o valor se não(:) mostre objeto vazio {}
        const data = response ? JSON.parse(response):"Não há dados"
        // console.log("TODOS OS DADOS --> Dados existentes:", data);
        // setData(data);
        for (let i = 0; i < data.length; i++) {
            console.log(
                "DADOS INDIVIDUAIS: "+(i+1)+"/"+ data.length +"\n"+
                "ID: " + data[i].id +"\n"+
                "Nome: " + data[i].name +"\n"+
                "Mês: " + monthNames[data[i].month] +"\n"+
                "Publicações: "+ data[i].publication + "\n"+
                "Videos: " + data[i].video +"\n"+
                "Horas: " + data[i].hours +"\n"+
                "Revisitas: " + data[i].visity +"\n"+
                "Estudos: " + data[i].estudy + "\n"+
                "Obs: " + data[i].observation + "\n"
            );
        }

    }
    /*LER SOMENTE UM REGISTRO */
    async function getRelatorioID(Mes,Ano){
        const response = await getItem()
        // Se o response existir(?) mostre o valor se não(:) mostre objeto vazio {}
        const data = response ? JSON.parse(response):"Não encontrado"
        // percorre valores buscados = arguments
        
            // percorre valores salvos
            for (let i = 0; i < data.length; i++) {
                const mes = data[i].month;
                const ano = data[i].year
                if (Mes == mes && Ano == ano) {
                    setPrevPublications(data[i].publication)
                    setPrevVideo(data[i].video)
                    setPrevHours(data[i].hours)
                    setPrevVisity(data[i].visity)
                    setPrevEstudy(data[i].estudy)

                   console.log(
                        "ID LOCALIZADO: " + data[i].id +"\n"+
                        "Nome: " + data[i].name +"\n"+
                        "Mês: " + monthNames[data[i].month] +"\n"+
                        "Publicações: "+ data[i].publication + "\n"+
                        "Videos: " + data[i].video +"\n"+
                        "Horas: " + data[i].hours +"\n"+
                        "Revisitas: " + data[i].visity +"\n"+
                        "Estudos: " + data[i].estudy + "\n"+
                        "Obs: " + data[i].observation + "\n"
                    );
                }
            }
    }
    /*REMOVE TODOS OS REGISTROS */
    async function removeRelatorioAll(){
        await AsyncStorage.clear()
        getRelatorio()
    }
    /*REMOVE SOMENTE UM REGISTRO */
    async function removeRelatorio(value) {
        try {
            await AsyncStorage.setItem('@publicador:relatorios', value)
        } catch (e) {
            alert("Error "+e.message)
        }
    }
    //************************** FORMULÁRIO - CRUD - FIM ********************************* */
    
    useEffect(()=>{
        showConfig()
    },[])

    return(
        <KeyboardAvoidingView style={styles.conteiner}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
        >
            <ScrollView>
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
                            <InputText placeholder={name} style={styles.itensTitle}/>
                        </View>
                    </View>    
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.itens}>Publicações</Text>
                        <Text style={styles.subItens}>Mês anterior:{prevPublication}</Text>
                    </View>
                    <InputNumeric
                        myValor = {(x)=>updateValor(x,"Publications")}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.itens}>Videos</Text>
                        <Text style={styles.subItens}>Mês anterior:{prevVideo}</Text>
                    </View>
                    <InputNumeric
                        myValor = {(x)=>updateValor(x,"Videos")}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.itens}>Horas</Text>
                        <Text style={styles.subItens}>Mês anterior:{prevHours}</Text>
                    </View>
                    <InputNumeric
                        myValor = {(x)=>updateValor(x,"Hours")}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.itens}>Revisitas</Text>
                        <Text style={styles.subItens}>Mês anterior:{prevVisity}</Text>
                    </View>
                    <InputNumeric
                        myValor = {(x)=>updateValor(x,"Visity")}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.box}>
                        <Text style={styles.itens}>Estudos</Text>
                        <Text style={styles.subItens}>Mês anterior:{prevEstudy}</Text>
                    </View>
                    <InputNumeric
                        myValor = {(x)=>updateValor(x,"Estudy")}
                    />
                </View>
                <View style={styles.colum}>
                    <View style={styles.columBox}>
                        <Text style={styles.columItens}>Obs:</Text>
                        <InputText 
                        placeholder={"Digite aqui"}
                        style={styles.itensTitle}
                        onChange={setObservation}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={newRelatorio}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={removeRelatorio}>
                    <Text style={styles.buttonText}>Remover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={removeRelatorioAll}>
                    <Text style={styles.buttonText}>Apagar Tudo</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
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