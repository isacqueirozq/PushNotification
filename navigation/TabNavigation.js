import * as React from 'react';
import { Button, Text, View } from 'react-native';
//Tab Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Pages
import HomeScreen from "../screens/Home"
import RelatorioScreen from "../screens/Relatorio"
import TesteScreen from '../screens/Teste';


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
            else if (route.name === 'Relatorio de Campo') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            else if (route.name === 'Teste') {
              iconName = focused ? 'construct-outline' : 'construct-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Teste" component={TesteScreen} />
        <Tab.Screen name="Relatorio de Campo" component={RelatorioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}