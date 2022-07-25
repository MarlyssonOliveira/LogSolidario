import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Text } from "react-native-elements";
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


  return (
    <View>
      <View style={styles.content}>
        <Text>DETALHES</Text>
      </View>

      <View style={styles.botoes}>
                <Button
                    title='Doar'
                    color='#1e90ff'
                    onPress={pressHome1}
                />
            </View>
      <Footer ativo="home"/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: "90px",
    top: 70,
    width: "100%",
  },
  botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    },
});
