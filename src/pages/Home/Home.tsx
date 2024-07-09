import React from 'react';
import { View, Text } from 'react-native';
import { ButtonM } from '../../components';

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <ButtonM
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      >
        <Text>Click to go to SignIn</Text>
      </ButtonM>
    </View>
  );
};
