import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, FlatList } from 'react-native';
import OrderItem from '../../components/shop/OrderItem';
import { removeFromCart, addOrder } from '../../store/actions';
import theme from '../../theme';

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => <OrderItem item={itemData.item} />}
    />
  );
};

export default OrdersScreen;
