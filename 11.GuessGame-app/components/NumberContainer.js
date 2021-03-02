import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../theme';

const NumberContainer = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.palette.secondary,
    padding: theme.spacing(1.2),
    borderRadius: 10,
    marginVertical: theme.spacing(1.2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: theme.palette.secondary,
    ...theme.typography.h1,
  },
});

export default NumberContainer;
