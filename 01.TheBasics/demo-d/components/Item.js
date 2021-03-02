import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Item = ({ item: { id, value }, onDelete }) => {
  return (
    // bind is alternative solution on inline arrow function
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
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
