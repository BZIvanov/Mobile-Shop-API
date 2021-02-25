import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../theme';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={{ ...styles.quantity, ...theme.typography.h5 }}>
          {item.quantity}{' '}
        </Text>
        <Text style={{ ...theme.typography.h4 }}>{item.productTitle}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={{ ...theme.typography.h4 }}>${item.sum.toFixed(2)}</Text>
        {onRemove && (
          <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
            <Ionicons
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={23}
              color='red'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: theme.palette.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    color: '#888',
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
