import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

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
                placeholder='Nome do beneficiário'
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
                    style={styles.input}
                    placeholder='Qnt'
                />
            </View>
            
            <View style={styles.botoes}>
             <Button 
                title = 'Entregar'
                color = '#1e90ff'
                onPress = {pressEntregar}
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
    },
    inputAndroid: {
        fontSize: 18,
        color: 'black',
        paddingTop: '30%'
    },
    doacao:{
        flexDirection:"row",

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