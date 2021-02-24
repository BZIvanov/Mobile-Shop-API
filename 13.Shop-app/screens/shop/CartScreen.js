import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';
import theme from '../../theme';

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const items = [];
    for (const key in state.cart.items) {
      items.push({
        productId: key,
        ...state.cart.items[key],
      });
    }
    return items;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={{ ...theme.typography.h3 }}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          color={theme.palette.secondary}
          title='Order Now'
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <Text>CART ITEMS HERE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: theme.palette.black,
    shadowOpacity: 0.27,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: theme.palette.white,
  },
  amount: {
    color: theme.palette.primary,
  },
});

export default CartScreen;
