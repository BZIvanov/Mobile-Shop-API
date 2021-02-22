import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = ({ customStyles, children }) => {
  return <Text style={{ ...styles.body, ...customStyles }}>{children}</Text>;
};

// this is how we can easily reuse this font family instead of applying it individually for every Text component
const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-regular',
  },
});

export default BodyText;
