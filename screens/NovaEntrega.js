import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Footer from '../components/footer';
import { TextInput } from "react-native-paper";

export default function NovoEntrega({ navigation }) {

    const pressEntregar = () => {
        navigation.navigate('Home');
    }

    const pressAddBeneficiario = () => {
        navigation.navigate('NovoBeneficiario');
    }
    

    const [selectedValue, setSelectedValue] = useState("java");

    return (
       <View style={styles.profile}>
           <TextInput
                style={styles.input}
                label="Nome do Beneficiario"
                placeholder='Nome do Beneficiario'
                activeUnderlineColor="blue"
            />

            <View style={styles.mensagem}>
                <Text>Adicione um novo beneficiário!</Text>
                <View style={styles.botoesAdd}>
                    <Button 
                        title = '+'
                        color = '#1e90ff'
                        onPress = {pressAddBeneficiario}
                    />
                 </View> 
            </View>
            
            <View style={styles.doacao}>
                <View style={styles.inputAndroid}>
                    <RNPickerSelect 
                        placeholder={{ label: "Selecione uma categoria", value: null }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: "Arroz", value: "Arroz" },
                            { label: "Açucar", value: "Açucar" },
                            { label: "Feijão", value: "Feijão" },
                            { label: "Roupas", value: "Roupas" },
                            ]}
                    />
                </View>

                <TextInput
                    style={styles.inputQtd}
                    label="Qtd"
                    placeholder='Qtd'
                    activeUnderlineColor="blue"
                />
            </View>
            
            <View style={styles.botoes}>
             <Button 
                title = 'Entregar'
                color = '#1e90ff'
                onPress = {pressEntregar}
            />
            </View>

            
            <Footer ativo="entrega"/>
       </View> 
    )
}
const styles = StyleSheet.create({
    profile:{
        alignItems:'center',
        paddingTop: '30%'
    },
    input: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
    },
    inputQtd: {
        borderColor: "gray",
        width: "30%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
    },
   
    inputAndroid: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
    },
    botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    },

    doacao: {
        flexDirection: "row",
        width: "70%",

    },
    mensagem:{
        flexDirection: "row", 
        paddingTop: 20,
        alignItems: 'center'
    },
    botoesAdd:{
        width: 30,
        marginLeft:10
        
    }
        
    })