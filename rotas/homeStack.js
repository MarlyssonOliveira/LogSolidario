import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Header from "../components/header";
import Estoque from "../screens/Estoque";
import Login from "../screens/Login";
import NovoUsuario from "../screens/NovoUsuario";
import NovoItem from "../screens/NovoItem"
import NovoBeneficiario from "../screens/NovoBeneficiario";
import NovaDoacao from "../screens/NovaDoacao";
import NovaEntrega from "../screens/NovaEntrega";
import Footer from "../components/footer";


const telas = {
    Login: {
        screen: Login,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    NovaEntrega:{
        screen: NovaEntrega,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        }
    },
    NovaDoacao:{
        screen: NovaDoacao,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        }
    },
    
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    Estoque: {
        screen: Estoque,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    NovoUsuario: {
        screen: NovoUsuario,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    NovoItem: {
        screen: NovoItem,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        } 
    },
    NovoBeneficiario:{
        screen: NovoBeneficiario,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>
        }
    },
    Footer:{
        screen: Footer,
        }
    }


const HomeStack = createStackNavigator(telas, {
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: "#074EE8", height: 60}
        }
    }
    
);

export default createAppContainer(HomeStack);