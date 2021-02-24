import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';
import CartItem from './CartItem';
import theme from '../../theme';

const OrderItem = ({ item }) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={{ ...theme.typography.h4 }}>
          ${item.totalAmount.toFixed(2)}
        </Text>
        <Text style={{ ...styles.date, ...theme.typography.h5 }}>
          {item.readableDate}
        </Text>
      </View>
      <Button color={theme.palette.primary} title='Show Details' />
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: theme.palette.black,
    shadowOpacity: 0.27,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: theme.palette.white,
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  date: {
    color: '#888',
  },
});

export default OrderItem;
