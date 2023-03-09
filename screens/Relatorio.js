import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {InputText, InputNumeric} from '../components/Input';
import RelatorioCampo from '../components/RelatorioCampo';

 
export default function RelatorioScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
           <RelatorioCampo Nome={"Nome Completo"}/>
        </View>
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