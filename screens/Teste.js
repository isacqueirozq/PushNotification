import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {InputText, InputNumeric} from '../components/Input';
import RelatorioCampo from '../components/RelatorioCampo';

 
export default function TesteScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
           <RelatorioCampo/>
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