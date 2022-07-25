import React, { useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity, FlatList } from "react-native";
import { Icon, Text } from "react-native-elements";
import Footer from "../components/footer";
import Header from "../components/header";
import UpperTab from "../components/upperTab";

export default function Home2({navigation}) {

  
const pressDoacao = () => {
    navigation.navigate('NovaDoacao');
}

const pressEntrega = () => {
    navigation.navigate('NovaEntrega');
}

const pressEstoque = () => {
    navigation.navigate('Estoque');
}

const pressHome1 = () => {
  navigation.navigate('Home');
}
const [pessoa, setPessoa] = useState([
  { doador: "Tatiana", data_registro: "01-07-2020", key: "1" },
  { doador: "Marlysson", data_registro: "01-06-2022", key: "2" },
])

  return (
    <View>
      <UpperTab ativo="saida"/>
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
      <View style={styles.content}>
        <FlatList
          data={pessoa}

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
      <Footer ativo="home"/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: "75%",
    fontSize: "48px",
    top: 110,
    width: "100%",
  },
  botoes: {
    position: "fixed",
    bottom: 70,
    width: 100
  },
  // Se aumentar as margens TOP e BOTTOM a lista faz o scroll sozinha, mas o header vai junto!!
  item: {
    marginTop: 70,
    marginBottom: 60,
   

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
    marginTop: 70,
    position:"absolute",
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
  },
  textStyle: {
    textAlign: 'center',
    color: '000',
    fontSize: 18,
    padding: 7,
    fontWeight: "bold",
  },

});