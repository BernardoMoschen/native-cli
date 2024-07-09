import { Platform,  } from 'react-native';
import React from 'react';
import { Router } from '../router/Router';
import {PaperProvider} from 'react-native-paper';
import {Drawer} from '../components';

export default function App() {
  const {OS} = Platform;

  return (
    <PaperProvider>
      <Router />
      <Drawer />
    </PaperProvider>
  );
}
