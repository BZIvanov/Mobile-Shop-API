import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../theme';

const Header = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: theme.spacing(11.2),
    paddingTop: theme.spacing(4.5),
    backgroundColor: theme.palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.palette.black,
    ...theme.typography.h3,
  },
});

export default Header;
