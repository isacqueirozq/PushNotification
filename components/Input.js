import { StyleSheet } from 'react-native';
import { TextInput, View, Text, TouchableOpacity, } from "react-native";
import { useEffect, useState } from 'react';

// ref={(input)=>{inputRef1.current = input}}
// maxLength={3}
// keyboardType="numeric"
// style={stylesInput.InputRel}
// returnKeyType = {"next"}
// placeholder="Input"
// onChangeText = {setVideo}
// value={video}
// onSubmitEditing = {() => {inputRef2.current.focus()}}
// blurOnSubmit={false}

function InputText(props){
  const [text,setText] = useState('') 
  
  return(
    <View style={stylesInput.text}>
        <TextInput
        style={props.style}
        placeholder={props.placeholder}
        onChange={()=>props.onChange(text)}
        onChangeText={setText}
        value={text}
        ></TextInput>
    </View>
  );
};



function InputNumeric(props) {
  const [valor,setValor] = useState(0) 
  const minimus = ()=>{
    if (valor<=0) {
      return setValor(0)
    }
  }
  const add = () =>{
    setValor(valor+1)
    props.myValor(valor+1)
  }
  const minus = () =>{
    minimus(setValor(valor-1))
    if (valor-1 <=0) {
      props.myValor(0)
    }else{
      props.myValor(valor-1)
    }
  }
  

  return(
    <View style={stylesInput.conteinerNumber}> 
      <TouchableOpacity style={stylesInput.btn} onPress={minus}>
          <Text style={stylesInput.bt}>-</Text>
      </TouchableOpacity>

      <TextInput
      style={stylesInput.inputNumber}
      placeholder="0"
      keyboardType="numeric"
      maxLength={3}
      onChangeText={(x)=>{
        setValor(Number(x),
        props.myValor(x)
        )}}
      >{valor}</TextInput>
      
      <TouchableOpacity style={stylesInput.btn} onPress={add}>
          <Text style={stylesInput.bt}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export {InputText, InputNumeric}

const stylesInput = StyleSheet.create({
  text:{
    width:'100%', 
    height:"auto",
    justifyContent:'center',
  },
  bt:{
    fontSize:30,
  },
  btn:{
    backgroundColor:"#f6f6f6",
    width:50,
    height:50,
    alignItems:"center",
    
  },
  conteinerNumber: {
    height:"auto",
    justifyContent:'center',
    flexDirection:"row",
    alignItems: 'center',
    
  },
  input:{
    textAlign: "center",
    borderRadius:10,
    // backgroundColor:"#f6f6f6",
    height:50,
    margin:12,
    fontSize:20,
  },
  inputNumber:{
    textAlign: "center",
    width:50,
    backgroundColor:"#f6f6f6",
    height:50,
    fontSize:20,
  }
});