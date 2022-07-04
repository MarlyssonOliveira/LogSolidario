import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {

    const pressLogin = () => {
        navigation.navigate('Home');
    }
    const pressNew = () => {
        navigation.navigate('NovoUsuario');
    }

    return (
       <View style={styles.profile}>
           <Image style={{ width: 100, height: 100 }} source={require('../assets/user.png')}/>
            <TextInput 
                style={styles.input}
                placeholder='Usuário'
            />
            <TextInput 
                style={styles.input}
                placeholder='Senha'
            />
            <View style={styles.botaoLogin}>
            <Button 
                title= 'Login'
                color= '#1e90ff'
                onPress= {pressLogin}
            />
            </View>
           
                <Text style={styles.mensagem}> Não possui uma conta? </Text>

            <View style={styles.botoes}>
             <Button 
                title = 'Cadastrar'
                color = '#1e90ff'
                onPress = {pressNew}
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
    mensagem:{
        paddingTop:70
    },
    botaoLogin:{
        paddingTop: "10%",
        width: 100,
    },
    botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    }
        
    })