import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import Footer from '../components/footer';
import { TextInput } from "react-native-paper";

export default function NovoBeneficiario({ navigation }) {

    const pressCadastrar = () => {
        navigation.navigate('NovaEntrega');
    }

    return (
        <View style={styles.profile}>
            <TextInput
                style={styles.input}
                label="Nome do Beneficiario"
                placeholder='Nome do Beneficiario'
                activeUnderlineColor="blue"
            />
            <View style={styles.endereco}>
                <TextInput
                    style={styles.inputCep}
                    label="CEP"
                    placeholder='CEP'
                    activeUnderlineColor="blue"
                />
                <TextInput
                    style={styles.inputN}
                    label="Num"
                    placeholder='Num'
                    activeUnderlineColor="blue"
                />
            </View>
            
            <View style={styles.botoes}>
                <Button
                    title='Cadastrar'
                    color='#1e90ff'
                    onPress={pressCadastrar}
                />
            </View>
            <TextInput
                style={styles.input}
                label="Telefone"
                placeholder='Telefone'
                activeUnderlineColor="blue"
            />

            <Footer ativo="entrega" />
        </View>
    )
}
const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        paddingTop: '30%'
    },
    input: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
    },
    inputN: {
        borderColor: "gray",
        width: "30%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
    },
    botoes: {
        position: "fixed",
        bottom: 90,
        width: 100
    },
    inputCep: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
    },
    botoes: {
        position: "fixed",
        bottom: 70,
        flex: 1
    },
    endereco: {
        flexDirection: "row",
        width: "70%",


    },


})