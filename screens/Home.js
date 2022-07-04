import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Text } from "react-native-elements";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home({navigation}) {

const pressDoacao = () => {
    navigation.navigate('NovaDoacao');
}

const pressEntrega = () => {
    navigation.navigate('NovaEntrega');
}

const pressEstoque = () => {
    navigation.navigate('Estoque');
}

  return (
    <View>
     
      <Text style={styles.content}>Conteudo da Home</Text>
      <View style={styles.botoes}>
             <Button 
                title = 'Doar'
                color = '#1e90ff'
                onPress = {pressDoacao}
              />
              <Button 
                title = 'Entregar'
                color = '#1e90ff'
                onPress = {pressEntrega}
              />
              <Button 
                title = 'Estoque'
                color = '#1e90ff'
                onPress = {pressEstoque}
              />
            </View>
            <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: "48px",
    alignItems: 'center'
  },
  botoes:{
        position: "fixed",
        bottom: 70,
        width:100
    },
});
