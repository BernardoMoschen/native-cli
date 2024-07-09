import React from 'react';
import { View, Text } from 'react-native';
import { ButtonM } from '../../components';

export const SignIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ButtonM
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text>Click to go to Home</Text>
      </ButtonM>
    </View>
  );
};
