import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Header from "../components/header";

export default function Estoque() {
  return (
    <View>
      <Text style={styles.content}>Conteudo do Estoque</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: "48px",
  },
});
