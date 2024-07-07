import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const vh = Dimensions.get('window').height;

// was layoutRaw
export const Layout = styled.View({
  // overflow: 'hidden',
  // position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  // minHeight: '100svh',
});

export const LayoutContent = styled.View({
  flex: '1',
});

export const LayoutFooter = styled.View({
  marginTop: vh / 5,
});
