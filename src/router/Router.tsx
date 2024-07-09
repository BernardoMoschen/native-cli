import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, SignIn, NotFound} from '../pages';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer
      children={
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
      }
    />
  );
};
