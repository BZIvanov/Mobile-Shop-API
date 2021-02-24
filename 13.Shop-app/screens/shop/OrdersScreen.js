import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, FlatList } from 'react-native';
import { removeFromCart, addOrder } from '../../store/actions';
import theme from '../../theme';

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

export default OrdersScreen;
