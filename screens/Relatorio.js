import React, { useRef, useState,useEffect } from "react";
import {
    Text, View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform,
    TouchableOpacity,TextInput,Vibration, Keyboard 
} from "react-native";
import {useAsyncStorage}from "@react-native-async-storage/async-storage"
import uuid from "react-native-uuid";


export default function RelatorioScreen({navigation}) {
    const [name, setName] = useState("Isac Queiroz ")
    const [month, setMonth] = useState("Março")
    const [publication, setPublications] = useState("")
    const [video, setVideo] = useState("")
    const [hours, setHours] = useState("")
    const [visity, setVisity] = useState("")
    const [estudy, setEstudy] = useState("")
    const [observation, setObservation] = useState("") 
    const {getItem,setItem}= useAsyncStorage("@publicador:relatorios")
    const ONE_SECOND_IN_MS = 1000;
    const vibrationConfirm = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
  ];

// GRAVAR ITENS
    async function handleNew(){
        try {
            const id = uuid.v4() //Gerar uma chave id aleatória
            const newData = {
                id,
                name,
                month,
                publication,
                video,
                hours,
                visity,
                estudy,
                observation
            }

            //Buscar o que existe para gravar junto com o novo
            const response = await getItem()
            const previousData = response ? JSON.parse(response) : []
            const data = [...previousData,newData]

            // gravar
            await setItem(JSON.stringify(data))
            Vibration.vibrate(vibrationConfirm,true)
            alert("Cadastrado com sucesso")
        } catch (error) {
            console.log(error);
            alert("ERRO: NÃO CADASTRADO")
        }
    }

// LER ITENS
    const [data,setData] = useState()
   
    async function handleFetchData(){
        const response = await getItem()
        // Se o response existir(?) mostre o valor se não(:) mostre objeto vazio {}
        const data = response ? JSON.parse(response):[]
        // .......>>>>    console.log(data);
        // setData(data);
    }

// DELETAR
    async function handleRemove(id) {
        const response = await getItem()
        const previousData = response ? JSON.parse(response) : []

        const data = previousData.filter((item)=>item.id !== id)
        setItem(JSON.stringify(data))
        setData(data)
    }
    // chamar o HandleRemove no onpress para deletar ex:data(item) onpress={()=> handleRemove(item.id)}
    // handleRemove("fcd216c1-9ca5-4ed3-a41e-22bae7a8849e")

    useEffect(()=>{
        handleFetchData()
    },[])
    // useFocusEffect(useCallback(()=>{
    //      handleFetchData()
    // },[]))


    const inputRef1 = useRef(null) 
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputRef5 = useRef(null)
        
    const title = {
        publication:"Publicações",
        videos:"Videos",
        hours:"Horas",
        visity:"Revisitas",
        estudy:"Estudos",
        observations:"Observação"
    }
  
    
    return(
        <KeyboardAvoidingView style={styles.conteiner}
        behavior={Platform.OS === "ios" ? "padding":"height"}
        keyboardVerticalOffset={50}
        >

            <ScrollView style={{width:"100%"}}>
                <Text style={{
                    width:"100%",
                    fontSize:25, 
                    color:"white",
                    backgroundColor:"purple", 
                    padding:20,
                    textAlign:"center",
                    marginBottom:20
                }}>
                    {name}
                </Text>

                <View style={stylesInput.row}>
                    <TextInput
                    // ref={atual}
                    maxLength={3}
                    keyboardType="numeric"
                    style={stylesInput.InputRel}
                    returnKeyType = {"next"}
                    placeholder={title.publication}
                    onChangeText = {setPublications}
                    value={publication}
                    onSubmitEditing = {() => {inputRef1.current.focus()}}
                    blurOnSubmit={false}
                    ></TextInput>
                </View>

                <View style={stylesInput.row}>
                    <TextInput
                    ref={(input)=>{inputRef1.current = input}}
                    maxLength={3}
                    keyboardType="numeric"
                    style={stylesInput.InputRel}
                    returnKeyType = {"next"}
                    placeholder={title.videos}
                     onChangeText = {setVideo}
                    value={video}
                    onSubmitEditing = {() => {inputRef2.current.focus()}}
                    blurOnSubmit={false}
                    ></TextInput>
                </View>

                <View style={stylesInput.row}>
                    <TextInput
                    ref={(input)=>{inputRef2.current = input}}
                    maxLength={3}
                    keyboardType="numeric"
                    style={stylesInput.InputRel}
                    returnKeyType = {"next"}
                    placeholder={title.hours}
                    onChangeText = {setHours}
                    value={hours}
                    onSubmitEditing = {() => {inputRef3.current.focus()}}
                    blurOnSubmit={false}
                    ></TextInput>
                </View>

                <View style={stylesInput.row}>
                    <TextInput
                    ref={(input)=>{inputRef3.current = input}}
                    maxLength={3}
                    keyboardType="numeric"
                    style={stylesInput.InputRel}
                    returnKeyType = {"next"}
                    placeholder={title.visity}
                    onChangeText = {setVisity}
                    value={visity}
                    onSubmitEditing = {() => {inputRef4.current.focus()}}
                    blurOnSubmit={false}
                    ></TextInput>
                </View>

                <View style={stylesInput.row}>
                    <TextInput
                    ref={(input)=>{inputRef4.current = input}}
                    maxLength={3}
                    keyboardType="numeric"
                    style={stylesInput.InputRel}
                    returnKeyType = {"next"}
                    placeholder={title.estudy}
                    onChangeText = {setEstudy}
                    value={estudy}
                    onSubmitEditing = {() => {inputRef5.current.focus()}}
                    blurOnSubmit={false}
                    ></TextInput>
                </View>

                <View style={stylesInput.row}>
                    <TextInput
                    ref={(input)=>{inputRef5.current = input}}
                    maxLength={40}
                    keyboardType="default"
                    style={stylesInput.InputRel}
                    returnKeyType = {"default"}
                    placeholder={title.observations}
                    onChangeText = {setObservation}
                    value={observation}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false} 
                    ></TextInput>
                </View>

                <TouchableOpacity style={stylesInput.FormButton} onPress={handleNew}>
                    <Text style={stylesInput.textFormButton}>Enviar</Text>
                </TouchableOpacity>

               

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesInput = StyleSheet.create({
  
  row:{
    // width:'90%', 
    height:"auto",
    justifyContent:'center',
  },

  InputRel:{
        textAlign: "center",
        borderRadius:30,
        backgroundColor:"#f6f6f6",
        height:50,
        margin:12,
        fontSize:20,
    },

  FormButton:{
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    backgroundColor:"purple",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:20,
    marginTop:10,
  },
  textFormButton:{
        fontSize:20,
        color:"#ffffff",
  },
});
