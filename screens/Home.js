import React, { useState, useEffect } from 'react';
import { Icon } from "react-native-elements";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Footer from "../components/footer";
import Header from "../components/header";
import UpperTab from "../components/upperTab";
import axios from 'axios';


export default function Home({ navigation }) {


  const pressDoacao = () => {
    navigation.navigate('NovaDoacao');
  }

  const pressEntrega = () => {
    navigation.navigate('NovaEntrega');
  }

  const pressEstoque = () => {
    navigation.navigate('Estoque');
  }

  const pressHome2 = () => {
    navigation.navigate('Home2');
  }

  const ListHeader = () => {
    return (
      <View style={styles.headerFlatlistStyle}>
        <Text style={styles.textStyle}>
          Doador
        </Text>
        <Text style={styles.textStyle}>
          Data Registro
        </Text>
        <Text style={styles.textStyle}>
          Id
        </Text>
        <Text style={styles.textStyle}>
          Detalhes
        </Text>
      </View>
    );
  };
  const [pessoa, setPessoa] = useState([
    { doador: "Tatiana", data_registro: "01-07-2020", key: "1" },
    { doador: "Marlysson", data_registro: "01-06-2022", key: "2" },
    { doador: "Joao", data_registro: "28-05-2022", key: "3" },
    { doador: "Maria", data_registro: "27-05-2022", key: "4" },

  ])


  return (
    <View>
      <UpperTab ativo="entrada" />

      <View style={styles.content}>

        <FlatList
          data={pessoa}
          ListHeaderComponent={ListHeader}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={pressEstoque}>
              <View style={styles.touch}>

                <Text style={styles.item}>{item.doador}</Text>
                <Text style={styles.item}>{item.data_registro}</Text>
                <Text style={styles.item}>{item.key}</Text>
                <Icon
                  style={styles.item}
                  name="eye"
                  type="feather"

                />

              </View>
            </TouchableOpacity>

          )}
        />
      </View>
      <Footer ativo="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: "48px",
    top: 70,
    width: "100%",
  },
  botoes: {
    position: "fixed",
    bottom: 70,
    width: 100
  },
  // Se aumentar as margens TOP e BOTTOM a lista faz o scroll sozinha, mas o header vai junto!!
  item: {
    marginTop: 10,
    marginBottom: 10,
   

  },
  touch: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignContent: 'center',
    backgroundColor: "#fff",
    borderTopColor: "#074EE8",
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
    marginTop:3,

  },
  headerFlatlistStyle: {
    flexDirection: "row",
    width: '100%',
    height: 45,
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderTopColor: "#074EE8",
    borderTopWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2,
    marginTop:5,
  },
  textStyle: {
    textAlign: 'center',
    color: '000',
    fontSize: 18,
    padding: 7,
    fontWeight: "bold",
  },

});
