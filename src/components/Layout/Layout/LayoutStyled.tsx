import styled from 'styled-components/native';

export const LayoutRaw = styled.View({
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100svh',
});

export const LayoutContent = styled.View({
  flex: '1',
});

export const LayoutFooter = styled.View(() => ({
  marginTop: '5vh',
}));
