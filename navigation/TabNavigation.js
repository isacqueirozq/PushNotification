import * as React from 'react';
import { Button, Text, View } from 'react-native';
//Tab Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Pages
import HomeScreen from "../screens/Home"
import RelatorioScreen from '../screens/Relatorio';
import ConfigScreen from '../screens/Configuracao';
import PublicadoresScreen from '../screens/Publicadores';
import CongScreen from '../screens/Congregacao';
import PublicadorCreate from '../components/PublicadorCreate';


//Tab navigation
const Tab = createBottomTabNavigator();
//--

export default function TabNavigation(){
    return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home': 'ios-home-outline';
              
            } 
            else if (route.name === 'Congregação') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            }
            else if (route.name === 'Publicadores') {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'Relatorio de Campo') {
              iconName = focused ? 'create' : 'create-outline';
            }
            else if (route.name === 'Configurações') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Publicadores" component={PublicadoresScreen}/>
        <Tab.Screen name="Relatorio de Campo" component={RelatorioScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Congregação" component={CongScreen} />
        <Tab.Screen name="Configurações" component={ConfigScreen} />
        <Tab.Screen name="Cadastro de Publicador" component={PublicadorCreate} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}