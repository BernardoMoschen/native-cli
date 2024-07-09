import React from 'react';
import { View, Text } from 'react-native';
import {ButtonM, Container} from '../../components';
import {Greetings} from './Greetings/Greetings';
import {CardNavigation} from './CardNavigation/CardNavigation';
import {Carousel} from './Carousel/Carousel';

export const Home = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1, gap: 16}}>
        <Greetings />
        <CardNavigation
          title="My plan"
          navigateTo="Manage"
          children={<Text>Simply Unlimited</Text>}
        />
        <CardNavigation
          title="My bills"
          navigateTo="Details"
          children={<Text>Total amount ...</Text>}
        />
        <Carousel />
        <ButtonM
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text>Click to go to SignIn</Text>
        </ButtonM>
        <ButtonM
          onPress={() => {
            navigation.navigate('NotFound');
          }}>
          <Text>Click to go to NotFound</Text>
        </ButtonM>
      </View>
    </Container>
  );
};
