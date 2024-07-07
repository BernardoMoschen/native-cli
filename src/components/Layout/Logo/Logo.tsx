import React from 'react';
import { Image, View } from 'react-native';

export const Logo = () => {
  return (
    // <Link to='/' sx={{ display: 'flex' }}>
    <Image
      source={require('./assets/logoMobilePng.png')}
      // style={{
      //   margin: '20px 0px',
      // }}
    />
    // </Link>
  );
};
