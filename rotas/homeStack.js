import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Header from "../components/header";
import Doacao from "../screens/Doacao";
import Entrega from "../screens/Entrega";
import Estoque from "../screens/Estoque";

const telas = {
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    Doacao: {
        screen: Doacao,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    Entrega: {
        screen: Entrega,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    Estoque: {
        screen: Estoque,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    }
}

const HomeStack = createStackNavigator(telas, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: "#074EE8", height: 60}
        }
    },
);

export default createAppContainer(HomeStack);