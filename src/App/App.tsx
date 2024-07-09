import { Platform,  } from 'react-native';
import React from 'react';
import { Router } from '../router/Router';


export default function App() {
  const { OS } = Platform;

  return <Router />;
}
