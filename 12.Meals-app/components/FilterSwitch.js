import React from 'react';
import { StyleSheet, View, Text, Switch, Platform } from 'react-native';
import theme from '../theme';

const FilterSwitch = ({ label, checked, setChecked }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: theme.palette.primary }}
        thumbColor={Platform.OS === 'android' ? theme.palette.primary : ''}
        value={checked}
        onValueChange={(newValue) => setChecked(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FilterSwitch;
