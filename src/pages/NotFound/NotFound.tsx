import styled from 'styled-components/native';
import {Container} from '../../components';
import {Text, View} from 'react-native';

const Title = styled.Text({
  fontSize: 32,
  // lineHeight: 40 / 32,
  fontWeight: 400,
  // letterSpacing: '-0.02em',
  textAlign: 'left',
  color: 'orange',
});

const Subtitle = styled.Text({
  fontSize: 28,
  // lineHeight: 36 / 28,
  fontWeight: 400,
  // letterSpacing: '-0.02em',
  textAlign: 'left',
  color: 'orange',
});

const Body = styled.Text({
  fontSize: 16,
  fontWeight: 400,
  // lineHeight: 24 / 16,
  color: 'orange',
  textAlign: 'left',
});

export const NotFound = () => {
  return (
    <Container>
      {/* <Layout> */}
      {/* <Header /> */}
      <View style={{marginVertical: 8}}>
        <Title>404</Title>
        <Subtitle>Whoops! Looks like you got lost in Paradise...</Subtitle>
        <Body style={{marginVertical: 8}}>
          Let us help you find your way back - check out our FAQ page or go back
          to the beginning{' '}
          <Text
          //   to="/"
          >
            <>here*Link</>
          </Text>
          .
        </Body>
      </View>
      {/* </Layout> */}
    </Container>
  );
};
