import { Button, Icon } from "react-native-elements";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";


function UpperTab({ navigation, ativo }) {

    const pressHome1 = () => {
        navigation.navigate('Home');
    }

    const pressHome2 = () => {
        navigation.navigate('Home2');
    }

    return (
        <>
            <View style={styles.tabBar}>
                <View>
                    <View>
                        <TouchableOpacity  onPress={pressHome1}>
                            <Text
                                style={{
                                    opacity: ativo == "entrada" ? 1 : 0.5,
                                    color: ativo == "entrada" ? "#074EE8" : "#000",
                                    fontSize: 20,
                                }}
                               
                            >
                                Entrada
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* possivel barra de separação */}
                <View>
                    <View>
                        <TouchableOpacity  onPress={pressHome2}>
                            <Text
                                style={{
                                    opacity: ativo == "saida" ? "1" : 0.5,
                                    color: ativo == "saida" ? "#074EE8" : "#000",
                                    fontSize: 20
                                }}
                               
                            >
                                Saída
                            </Text>
                        </TouchableOpacity>
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
        alignSelf: 'flex-start',
        position: "fixed",
        height: 60,
        top: 70,
        width: "100%",
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

export default withNavigation(UpperTab);