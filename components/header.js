import { StyleSheet, Text, View, Image } from "react-native";

export default function Header({navigation}) {
    return (
        <View style={styles.header}>
            <Image style={{ width: 45, height: 30 }} source={require('../assets/logo.png')} /> 
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
        backgroundColor: "#1e90ff", 
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