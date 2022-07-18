import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Input from 'react-native-input-style'; // Desinstalar pacote..
import { TextInput } from "react-native-paper";

export default function Login({ navigation }) {

    const pressLogin = () => {
        navigation.navigate('Home');
    }
    const pressNew = () => {
        navigation.navigate('NovoUsuario');
    }

    return (
        <View style={styles.profile}>
            <Image style={{ width: 100, height: 100 }} source={require('../assets/user.png')} />
            
            <TextInput
                style={styles.input}
                label="Email"
                placeholder='Email'
                left={<TextInput.Icon name="account"/>}
                activeUnderlineColor="blue"             
            />
            <TextInput
                style={styles.input}
                label="Senha"
                placeholder='Senha'
                left={<TextInput.Icon name="key"/>}
                activeUnderlineColor="blue"             
            />
            <View style={styles.botaoLogin}>
                <Button
                    title='Login'
                    color='#1e90ff'
                    onPress={pressLogin}
                />
            </View>

            <Text style={styles.mensagem}> Não possui uma conta? </Text>

            <View style={styles.botoes}>
                <Button
                    title='Cadastrar'
                    color='#1e90ff'
                    onPress={pressNew}
                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        paddingTop: '25%'
    },
    input: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop:"10%",
    },
    mensagem: {
        paddingTop: 70
    },
    botaoLogin: {
        paddingTop: "10%",
        width: 100,
    },
    botoes: {
        position: "fixed",
        bottom: 70,
        width: 100
    }

})