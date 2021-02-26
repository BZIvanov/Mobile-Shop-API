import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapPreview = ({ location, children }) => {
  let preview;
  if (location) {
    preview = `Your coords are: ${location.lat}x${location.lng}`;
  }

  return (
    <View style={styles.mapPreview}>
      {location ? <Text>{preview}</Text> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapPreview;
