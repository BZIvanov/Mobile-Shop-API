import React from 'react';
import { Text } from 'react-native';
import theme from '../theme';

const DefaultText = ({ children }) => {
  return <Text style={{ ...theme.typography.h6 }}>{children}</Text>;
};

export default DefaultText;
