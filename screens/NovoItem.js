import React, { useState } from 'react';
import { StyleSheet, View,  TextInput, Button } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Footer from '../components/footer';

export default function NovoItem({ navigation }) {

    const pressItem = () => {
        navigation.navigate('NovaDoacao');
    }
    const [selectedValue, setSelectedValue] = useState("java");

    return (
       <View style={styles.profile}>
            <TextInput 
                style={styles.input}
                placeholder='Nome'
            />
            <View style={styles.inputAndroid}>
            <RNPickerSelect 
                placeholder={{ label: "Selecione uma categoria", value: null }}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: "Alimentos", value: "Alimentos" },
                    { label: "Limpeza", value: "Limpeza" },
                    { label: "Higiene Pessoal", value: "Higiene Pessoal" },
                    { label: "Roupas", value: "Roupas" },
                     ]}
             />
             </View>

            <View style={styles.botoes}>
             <Button 
                title = 'Cadastrar'
                color = '#1e90ff'
                onPress = {pressItem}
            />
            </View>
            <Footer ativo="doacao"/>
       </View> 
    )
}
const styles = StyleSheet.create({
    profile:{
        alignItems:'center',
        paddingTop: '30%'
    },
    input:{
        paddingTop:'20%',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    },
    inputAndroid: {
        fontSize: 18,
        color: 'black',
        paddingTop: '30%'

      }
        
    })