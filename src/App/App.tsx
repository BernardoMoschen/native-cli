import { Platform, ScrollView, Text } from 'react-native';
import React from 'react';
import { Layout, Container, ButtonM } from '../components';

export default function App() {
  const { OS } = Platform;

  return (
    <Layout>
      <Container style={{ backgroundColor: '#222', height: '100%' }}>
        <Text
          style={{
            color: 'white',
          }}
        >
          Hello BMOS, you're using {OS}.
        </Text>
        <ButtonM>
          <Text>Click me</Text>
        </ButtonM>
      </Container>
    </Layout>
  );
}
