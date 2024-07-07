import { Text } from 'react-native';
import React from 'react';
import {
  Layout,
  LayoutContent,
} from './src/components/Layout/Layout/LayoutStyled';
import { Header } from './src/components/Layout/Header/Header';

export default function App() {
  return (
    <Layout>
      <LayoutContent>
        <Header />
        <Text>Welcome to Paradise</Text>
      </LayoutContent>
    </Layout>
  );
}
