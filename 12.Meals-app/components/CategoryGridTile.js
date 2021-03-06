import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import theme from '../theme';

const CategoryGridTile = ({ title, color, onSelect }) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={onSelect}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: theme.spacing(2),
    height: theme.spacing(18.8),
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: theme.spacing(2),
    shadowColor: theme.palette.black,
    shadowOpacity: 0.27,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    textAlign: 'right',
    ...theme.typography.h3,
  },
});

export default CategoryGridTile;
