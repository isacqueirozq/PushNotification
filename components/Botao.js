import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

export default function Botao({title,onPress}) {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        height:50,
        borderRadius:10,
        backgroundColor:'green',
        alignItems:"center",
        justifyContent:"center",
    },
    buttonText:{
        color:"white",
        fontSize:18,
    },
})
