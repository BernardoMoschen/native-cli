import React, {FC, ReactNode} from 'react';
import {Pressable, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {useRouterNavigation} from '../../../router/hooks/useRouterNavigation';

const Box = styled.View({
  flex: 1,
  // width: '328px',
  height: '84px',
  borderRadius: '16px',
  padding: '16px',
  backgroundColor: '#FFF',
});

const Title = styled.Text({
  color: '#123038',
  fontSize: 18,
  lineHeight: '24px',
  fontWeight: 600,
});

const NavigationText = styled.Text({
  color: '#123038',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 600,
});

type Props = {
  title: string;
  navigateTo: string;
  children: ReactNode;
};

export const CardNavigation: FC<Props> = ({title, navigateTo, children}) => {
  const navigation = useRouterNavigation();

  return (
    <Box>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Title>{title}</Title>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate(navigateTo)}>
          <NavigationText>{navigateTo}</NavigationText>
          <Text style={{fontSize: 6}}>Icon here</Text>
        </Pressable>
      </View>
      {children}
    </Box>
  );
};
