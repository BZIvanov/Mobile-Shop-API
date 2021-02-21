import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, customStyles }) => {
  return <View style={{ ...styles.card, ...customStyles }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black', // ios
    shadowOffset: {
      width: 0,
      height: 2,
    }, // ios
    shadowRadius: 6, // ios
    shadowOpacity: 0.27, // ios
    elevation: 5, // android
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
