import { Platform, ScrollView, Text } from 'react-native';
import React from 'react';
import { Layout, Container, ButtonM } from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SignIn } from '../pages';

const Stack = createNativeStackNavigator();

export default function App() {
  const { OS } = Platform;

  return (
    <NavigationContainer
      children={
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
      }
    />
  );
}
