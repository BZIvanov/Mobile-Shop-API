import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import CartItem from '../../components/shop/CartItem';
import Card from '../../components/UI/Card';
import { removeFromCart, addOrder } from '../../store/actions';
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
    return items.sort((a, b) => (a.productId > b.productId ? 1 : -1));
  });
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <Card customStyles={styles.summary}>
        <Text style={{ ...theme.typography.h3 }}>
          Total:{' '}
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        <Button
          color={theme.palette.secondary}
          title='Order Now'
          disabled={cartItems.length === 0}
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        />
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            item={itemData.item}
            onRemove={() => dispatch(removeFromCart(itemData.item.productId))}
          />
        )}
      />
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
  },
  amount: {
    color: theme.palette.primary,
  },
});

export default CartScreen;
