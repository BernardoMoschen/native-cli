import React, { FC, ReactNode } from 'react';
import { ScrollView } from 'react-native';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        alignSelf: 'center',
      }}
    >
      {children}
    </ScrollView>
  );
};
