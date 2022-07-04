import React from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

export default function NovoBeneficiario({ navigation }) {

    const pressCadastrar = () => {
        navigation.navigate('NovaEntrega');
    }

    return (
       <View style={styles.profile}>
            <TextInput 
                style={styles.input}
                placeholder='Nome'
            />
            <View style={styles.endereco}>
                <TextInput 
                    style={styles.inputCep}
                    placeholder="CEP"
                />
                <TextInput 
                    style={styles.inputN}
                    placeholder='Nº'
                />
            </View>
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
        borderBottomWidth: 1,
    
    },
    botoes:{
        position: "fixed",
        bottom: 70,
        flex: 1
    },
    endereco:{
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        marginLeft: "20%",
        paddingTop:'20%',
       
    },
    inputCep: {
        
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: "40%"
    },
    inputN:{
      
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: "20%",
        marginLeft:"10%"
    }

        
    })