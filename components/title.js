import React, { useDeferredValue } from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'

export default function Title(props) {
  return (
    <View style={styles.TitleContainer}>
      <View style={styles.TitleIcon}>
        <Feather 
            name={'arrow-left-circle'}  
            size={"40px"}
            color="#074EE8"
            />
      </View>
      <Text style={styles.TitleText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  TitleIcon: {
    position: "absolute",
    marginLeft: "5%",
    left: 0,
  },
  TitleText: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    fontFamily: "Sans-Serif"
  },
});
