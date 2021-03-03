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
    backgroundColor: 'green',
    padding: 20,
  },
});

export default Box;
