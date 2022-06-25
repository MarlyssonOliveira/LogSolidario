import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Doacao from '../screens/Doacao';
import Entrega from '../screens/Entrega';
import Estoque from '../screens/Estoque';
import Home from '../screens/Home';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Doacao:Doacao,
  Entrega:Entrega,
  Estoque: Estoque,
});

export default createAppContainer(TabNavigator);
