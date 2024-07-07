import React, { ReactNode } from 'react';
import { FC } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

type Props = {
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <SafeAreaView
    style={{
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }}
  >
    {children}
  </SafeAreaView>
);
