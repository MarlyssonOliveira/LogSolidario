import { Button, Icon } from "react-native-elements";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";


function Footer({navigation, ativo}) {
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
                        color={ativo == "home" ? "#074EE8": "#000"}
                        style={{
                            opacity: ativo == "home" ?  1 :0.5,
                            color: "#074EE8"
                        }}
                        onPress={pressHome}
                    />
                    <Text
                        style={{
                            opacity: ativo=="home"?  "1":0.5,
                            color: ativo=="home"? "#074EE8": "#000"
                        }}
                    >
                        Home
                    </Text>
                </View>
                {/* possivel barra de separação */}
                <View>
                    <View>
                        <Icon
                            name="heart"
                            color={ativo == "doacao" ? "#074EE8": "#000"}
                            type="feather"
                            style={{
                                opacity: ativo=="doacao"?  1:0.5,
                                color: "#074EE8"
                            }}
                            onPress = {pressDoacao}
                        />
                        <Text
                            style={{
                                opacity: ativo=="doacao"?  1 :0.5,
                                color: ativo=="doacao"? "#074EE8": "#000"
                            }}
                        >
                            Doação
                        </Text>
                    </View>
                </View>
                {/* possivel barra de separação */}
                <View>
                    <View>
                        <Icon
                            name="truck"
                            color={ativo == "entrega" ? "#074EE8": "#000"}
                            type="feather"
                            style={{
                                opacity: ativo=="entrega"?  1:0.5,
                                color: "#074EE8"
                            }}
                            onPress = {pressEntrega}
                        />
                        <Text
                            style={{
                                opacity: ativo=="entrega"?  1:0.5,
                                color: ativo=="entrega"? "#074EE8": "#000"
                            }}
                        >
                            Entregas
                        </Text>
                    </View>
                </View>
                {/* possivel barra de separação */}
                <View>
                    <View>
                        <Icon
                            color={ativo == "estoque" ? "#074EE8": "#000"}
                            name="package"
                            type="feather"
                            style={{
                                opacity: ativo=="estoque"?  "1":0.5,
                            }}
                            onPress = {pressEstoque}
                        />
                        <Text
                            style={{
                                opacity: ativo=="estoque"?  "1":0.5,
                                color: ativo=="estoque"? "#074EE8": "#000"
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

export default withNavigation(Footer);