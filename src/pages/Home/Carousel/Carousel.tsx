import React from 'react';
import {Image, View} from 'react-native';

export const Carousel = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        style={{
          width: 312,
          height: 180,
        }}
        source={require('./assets/carrouselImg1.png')}></Image>
    </View>
  );
};
