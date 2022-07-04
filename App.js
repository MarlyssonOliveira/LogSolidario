import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./rotas/homeStack";
import Navigator from "./rotas/homeStack";

export default function App() {
  return (
    <>
      <HomeStack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
