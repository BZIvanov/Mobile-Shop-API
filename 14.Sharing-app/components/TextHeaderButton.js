import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme';

const TextHeaderButton = ({ onSaveHandle }) => {
  return (
    <TouchableOpacity style={styles.headerButton} onPress={onSaveHandle}>
      <Text style={styles.headerButtonText}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: theme.palette.white,
  },
});

export default TextHeaderButton;
