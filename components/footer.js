import { Icon } from "react-native-elements";
import { StyleSheet, Text, View, Image } from "react-native";



export default function Footer({navigation}) {
    
    const pressHome = () => {
        navigation.navigate('Home');
    }
    
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
        <>
            <View style={styles.tabBar}>
                <View>
                    <Icon
                        name="home"
                        type="feather"
                        color={"#000"}
                        style={{
                            opacity: "1",
                        }}
                        onPress = {pressHome}
                    />
                    <Text
                        style={{
                            opacity: "1",
                            color: "#000",
                        }}
                    >
                        Home
                    </Text>
                </View>
                <View>
                    <View>
                        <Icon
                            name="heart"
                            color={"#000"}
                            type="feather"
                            style={{
                                opacity: "1",
                            }}
                            onPress = {pressDoacao}
                        />
                        <Text
                            style={{
                                opacity: "1",
                                color: "#000",
                            }}
                        >
                            Doação
                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon
                            name="truck"
                            color={"#000"}
                            type="feather"
                            style={{
                                opacity: "1",
                            }}
                            onPress = {pressEntrega}
                        />
                        <Text
                            style={{
                                opacity: "1",
                                color: "#000",
                            }}
                        >
                            Entregas
                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Icon
                            color={"#000"}
                            name="package"
                            type="feather"
                            style={{
                                opacity: "1",
                            }}
                            onPress = {pressEstoque}
                        />
                        <Text
                            style={{
                                opacity: "1",
                                color: "#000",
                            }}
                        >
                            Estoque
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: "fixed",
        height: 60,
        bottom: 5,
        left: 10,
        right: 10,
        borderRadius: 15,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderTopWidth: 1,
        borderTopColor: "#074EE8",
        borderColor: "#074EE8",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})