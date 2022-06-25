import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
                <Text style={styles.headerText}>Logo</Text>
                <Text style={styles.headerText}>UserName</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#074EE8", 
        height: 60,
        paddingHorizontal: "3%"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,

    }
})