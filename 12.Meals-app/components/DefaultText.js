import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../theme';

const DefaultText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.typography.fontRegular,
  },
});

export default DefaultText;
