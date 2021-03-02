import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Item = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Item;
