import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { TextInput } from "react-native-paper";

export default function NovoUsuario({ navigation }) {

    const pressCadastrar = () => {
        navigation.navigate('Home');
    }

    return (
       <View style={styles.profile}>
           <TextInput
                style={styles.input}
                label="Nome/Razão Social"
                placeholder='Nome/Razão Social'
                activeUnderlineColor="blue"             
            />
            <TextInput
                style={styles.input}
                label="CPF/CNPJ"
                placeholder='CPF/CNPJ'
                activeUnderlineColor="blue"             
            />
            <TextInput 
                style={styles.input}
                label="Email"
                placeholder='Email'
                activeUnderlineColor="blue" 
            />
            <TextInput 
                style={styles.input}
                label="Senha"
                placeholder='Senha'
                activeUnderlineColor="blue" 
            />
            <View style={styles.botoes}>
            <Button 
                title= 'Cadastrar'
                color= '#1e90ff'
                onPress= {pressCadastrar}
            />
            </View>
            
       </View> 
    )
}
const styles = StyleSheet.create({
    profile:{
        alignItems:'center',
        paddingTop: '30%'
    },
    input:{
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop:"10%",
    },
    botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    }
        
    })