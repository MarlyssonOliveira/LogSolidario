import React from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

export default function NovoUsuario({ navigation }) {

    const pressCadastrar = () => {
        navigation.navigate('Home');
    }

    return (
       <View style={styles.profile}>
            <TextInput 
                style={styles.input}
                placeholder='Nome/Razão Social'
            />
            <TextInput 
                style={styles.input}
                placeholder='CPF/CNPJ'
            />
            <TextInput 
                style={styles.input}
                placeholder='Email'
            />
            <TextInput 
                style={styles.input}
                placeholder='Senha'
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
        paddingTop:'20%',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    }
        
    })