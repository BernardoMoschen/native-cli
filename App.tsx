import { Platform, ScrollView, Text } from 'react-native';
import React from 'react';
import { Layout } from './src/components';

export default function App() {
  const { OS } = Platform;

  return (
    <Layout>
      <ScrollView style={{ backgroundColor: '#222', height: '100%' }}>
        <Text
          style={{
            color: 'white',
          }}
        >
          Hello BMOS, you're using {OS}.
        </Text>
      </ScrollView>
    </Layout>
  );
}
