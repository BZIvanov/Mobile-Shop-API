import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';

const Card = ({ children, customStyles }) => {
  return <View style={{ ...styles.wrapper, ...customStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: theme.palette.black, // ios
    shadowOffset: {
      width: 0,
      height: 2,
    }, // ios
    shadowRadius: 7, // ios
    shadowOpacity: 0.27, // ios
    elevation: 5, // android
    backgroundColor: theme.palette.white,
    padding: theme.spacing(2.5),
    borderRadius: 10,
  },
});

export default Card;
