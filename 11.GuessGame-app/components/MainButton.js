import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import theme from '../theme';

const MainButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.palette.primary,
    paddingVertical: theme.spacing(1.5),
    paddingHorizontal: theme.spacing(4),
    borderRadius: 20,
  },
  buttonText: {
    color: theme.palette.white,
    ...theme.typography.h4,
  },
});

export default MainButton;
