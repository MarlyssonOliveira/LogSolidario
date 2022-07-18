import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Picker } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Footer from "../components/footer"
import { TextInput } from "react-native-paper";

export default function NovoDoacao({ navigation }) {

    const pressDoar = () => {
        navigation.navigate('Home');
    }

    const pressAddItem = () => {
        navigation.navigate('NovoItem');
    }

    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <View style={styles.profile}>
            <TextInput
                style={styles.input}
                label="Doador"
                placeholder='Doador'
                activeUnderlineColor="blue"
            />
            <View style={styles.doacao}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.inputAndroid}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    itemStyle={{ backgroundColor: "grey", color: "grey", fontFamily:"Ebrima", fontSize:17 }}
                >
                    <Picker.Item label="Arroz" value="java" />
                    <Picker.Item label="Feijão" value="js" />
                </Picker>


                <TextInput
                    style={styles.inputQtd}
                    label="Qtd"
                    placeholder='Qtd'
                    activeUnderlineColor="blue"
                />
            </View>

            <View style={styles.mensagem}>
                <Text>Adicione um novo item!</Text>
                <View style={styles.botoesAdd}>
                    <Button
                        title='+'
                        color='#1e90ff'
                        onPress={pressAddItem}
                    />
                </View>
            </View>

            <View style={styles.botoes}>
                <Button
                    title='Doar'
                    color='#1e90ff'
                    onPress={pressDoar}
                />
            </View>
            <Footer ativo="doacao" />
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
    inputQtd: {
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
    inputAndroid: {
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: "10%",
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