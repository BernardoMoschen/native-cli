import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Box = styled.View({
  width: '328px',
  height: '84px',
  borderRadius: '16px',
  padding: '16px',
  backgroundColor: '#FFF',
});

const NameText = styled.Text({
  color: '#111827',
  fontSize: 20,
  lineHeight: '28px',
  fontWeight: 700,
});

const NumberText = styled.Text({
  color: '#4B5563',
  fontSize: 16,
  lineHeight: '24px',
  fontWeight: 400,
});

const Chip = styled.View({
  width: '78px',
  height: '24px',
  borderRadius: '24px',
  border: '1px solid #86EFAC',
  padding: '2px 10px',
  gap: '8px',
  backgroundColor: 'transparent',
});

export const Greetings = () => {
  return (
    <Box>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <NameText>Good day, John</NameText>
        <Chip />
      </View>
      <NumberText>+1 (441) 555-5551</NumberText>
    </Box>
  );
};
