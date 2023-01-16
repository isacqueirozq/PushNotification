import { StyleSheet } from 'react-native';
import { TextInput, View, Text, TouchableOpacity, } from "react-native";
import { useState } from 'react';

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
  return(
    <View style={stylesInput.text}>
        <TextInput
        style={stylesInput.input}
        placeholder="Input"
        ></TextInput>
    </View>
  );
};

function InputNumeric(props) {
  const [X, setX] = useState(0);
  const increment = ()=>{setX(X+1)}
  const decrement = ()=>{
    if (X > 0) {
      setX(X-1)
    } 
  }
  return(
    <View style={stylesInput.conteinerNumber}>
      <TouchableOpacity style={stylesInput.btn} onPress={decrement}>
          <Text style={stylesInput.bt}>-</Text>
      </TouchableOpacity>

      <TextInput
      style={stylesInput.inputNumber}
      placeholder="0"
      keyboardType="numeric"
      maxLength={3}
      onChangeText = {setX}
      >{X}</TextInput>

      <TouchableOpacity style={stylesInput.btn} onPress={increment}>
          <Text style={stylesInput.bt}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export {InputText, InputNumeric}

const stylesInput = StyleSheet.create({
  text:{
    width:'90%', 
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
    backgroundColor:"#f6f6f6",
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