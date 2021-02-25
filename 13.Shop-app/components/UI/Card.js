import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

const Card = ({ customStyles, children }) => {
  return <View style={{ ...styles.card, ...customStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: theme.palette.black,
    shadowOpacity: 0.27,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: theme.palette.white,
  },
});

export default Card;
