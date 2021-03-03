import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Box = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Some text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    padding: 20,
  },
});

export default Box;
