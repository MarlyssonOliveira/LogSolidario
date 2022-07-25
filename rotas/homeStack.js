import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Home2 from "../screens/Home2"
import Header from "../components/header";
import Estoque from "../screens/Estoque";
import Login from "../screens/Login";
import NovoUsuario from "../screens/NovoUsuario";
import NovoItem from "../screens/NovoItem"
import NovoBeneficiario from "../screens/NovoBeneficiario";
import NovaDoacao from "../screens/NovaDoacao";
import NovaEntrega from "../screens/NovaEntrega";
import Detalhes from "../screens/Detalhes";
import Footer from "../components/footer";


const telas = {
    Login: {
        screen: Login,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            
        } 
    },
    NovaEntrega:{
        screen: NovaEntrega,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
            
            
        }
    },
    NovaDoacao:{
        screen: NovaDoacao,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        }
    },
    
    Home: {
        screen: Home,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        } 
    },
    Home2: {
        screen: Home2,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        } 
    },
    Estoque: {
        screen: Estoque,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        } 
    },
    NovoUsuario: {
        screen: NovoUsuario,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        } 
    },
    NovoItem: {
        screen: NovoItem,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        } 
    },
    NovoBeneficiario:{
        screen: NovoBeneficiario,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        }
    },

    Detalhes:{
        screen: Detalhes,
        navigationOptions:{
            headerTitle: () => <Header title='Logotipo' user='fulano'/>,
            headerLeft: null,
        }
    },
    Footer:{
        screen: Footer,
        }
    }


const HomeStack = createStackNavigator(telas, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#1e90ff',
          },
        animationEnabled: false,

        }
    }
    
);

export default createAppContainer(HomeStack);