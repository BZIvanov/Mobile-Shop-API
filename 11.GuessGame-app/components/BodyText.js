import React from 'react';
import { Text } from 'react-native';
import theme from '../theme';

const BodyText = ({ variant = 'h6', customStyles, children }) => {
  return (
    <Text style={[theme.typography[variant], customStyles]}>{children}</Text>
  );
};

export default BodyText;
