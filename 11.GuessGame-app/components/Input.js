import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import theme from '../theme';

const Input = ({ customStyles, ...rest }) => {
  return <TextInput {...rest} style={{ ...styles.input, ...customStyles }} />;
};

const styles = StyleSheet.create({
  input: {
    height: theme.spacing(4),
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: theme.spacing(1.2),
  },
});

export default Input;
