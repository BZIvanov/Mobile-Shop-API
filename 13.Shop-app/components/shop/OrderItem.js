import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import CartItem from './CartItem';
import Card from '../UI/Card';
import theme from '../../theme';

const OrderItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card customStyles={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={{ ...theme.typography.h4 }}>
          ${item.totalAmount.toFixed(2)}
        </Text>
        <Text style={{ ...styles.date, ...theme.typography.h5 }}>
          {item.readableDate}
        </Text>
      </View>
      <Button
        color={theme.palette.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails && (
        <View style={styles.detailItems}>
          {item.items.map((cartItem) => (
            <CartItem key={cartItem.productId} item={cartItem} />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
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
  detailItems: {
    width: '100%',
  },
});

export default OrderItem;
