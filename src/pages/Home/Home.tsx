import React from 'react';
import { View, Text } from 'react-native';
import { ButtonM } from '../../components';
import { Greetings } from './Greetings/Greetings';

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Greetings />
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
