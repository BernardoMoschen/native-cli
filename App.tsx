import {
  Platform,
  ScrollView,
  StatusBar,
  Text,
  SafeAreaView,
} from 'react-native';
import React from 'react';

export default function App() {
  const { OS } = Platform;

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#222' }}>
        <StatusBar
          backgroundColor={'#F00'} // AndroidOnly
          barStyle={'light-content'}
          animated
        />
        <Text
          style={{
            color: 'white',
          }}
        >
          Hello BMOS, you're using {OS}.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
