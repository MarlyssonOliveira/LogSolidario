import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Picker } from 'react-native';
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


    const [selectedValue, setSelectedValue] = useState("Inicio");

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
                        title='+'
                        color='#1e90ff'
                        onPress={pressAddBeneficiario}
                    />
                </View>
            </View>

            <View style={styles.doacao}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.inputAndroid}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    itemStyle={{ backgroundColor: "grey", color: "grey", fontFamily: "Ebrima", fontSize: 17 }}
                >
                    <Picker.Item label="Escolha um item!" value="" />
                    <Picker.Item label="Arroz" value="arroz" />
                    <Picker.Item label="Feijão" value="feijao" />
                </Picker>

                <TextInput
                    style={styles.inputQtd}
                    label="Qtd"
                    placeholder='Qtd'
                    activeUnderlineColor="blue"
                    
                />
            </View>

            <View style={styles.botoes}>
                <Button
                    title='Entregar'
                    color='#1e90ff'
                    onPress={pressEntregar}
                />
            </View>


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
        borderColor: "grey",
        width: "70%",
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: "10%",
        backgroundColor: "#95860700",
    },
    inputQtd: {
        borderColor: "grey",
        width: "30%",
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: "10%",
        backgroundColor: "#95860700",
    },

    inputAndroid: {
        borderColor: "grey",
        backgroundColor: "#95860700",
        width: "70%",
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginRight: 5,
        marginTop: "10%",
    },
    botoes: {
        position: "fixed",
        bottom: 90,
        width: 100
    },

    doacao: {
        flexDirection: "row",
        width: "70%",
        

    },
    mensagem: {
        flexDirection: "row",
        paddingTop: 20,
        alignItems: 'center'
    },
    botoesAdd: {
        width: 30,
        marginLeft: 10

    }

})