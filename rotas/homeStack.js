import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Header from "../components/header";

const telas = {
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: () => <Header title='Agora VAAAI' user='Fulano'/>
        } 
    }
}

const HomeStack = createStackNavigator(telas, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: "#f00", height: 60}
        }
    }
);

export default createAppContainer(HomeStack);