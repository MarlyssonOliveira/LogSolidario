import React, { useDeferredValue } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header({title, user}) {
    return (
        <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <Text style={styles.headerText}>{user}</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    }
})