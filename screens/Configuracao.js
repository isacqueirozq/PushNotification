import * as React from 'react';
import { Button, Text, View,StyleSheet } from 'react-native';
import { DeviceDetails } from '../js/act';

export default function ConfigScreen(){
    return(
        <View style={styles.container}>
            
            <View style={styles.component}>
                <Text>Sobre este dispositivo:</Text>
                <DeviceDetails/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f6f6f6',
        padding:15,
    },
    component:{
        margin:15,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
    },
})