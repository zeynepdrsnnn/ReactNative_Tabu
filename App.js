import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameScreen from './screens/GameScreen';
import SettingsScreen from './screens/SettingsScreen';
import RulesScreen from './screens/RulesScreen';
import { GameProvider } from './context/GameContext';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Game') iconName = 'play-circle';
            else if (route.name === 'Settings') iconName = 'settings';
            else if (route.name === 'Rules') iconName = 'book';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
          <Tab.Screen name="Game" component={GameScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Rules" component={RulesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
