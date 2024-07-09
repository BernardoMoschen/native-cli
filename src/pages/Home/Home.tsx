import React from 'react';
import { View, Text } from 'react-native';
import {ButtonM, Container} from '../../components';
import {Greetings} from './Greetings/Greetings';

export const Home = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1}}>
        <Greetings />
        <ButtonM
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text>Click to go to SignIn</Text>
        </ButtonM>
      </View>
    </Container>
  );
};
