import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Image,
  Text,
  Button,
  Platform,
} from 'react-native';
import theme from '../../theme';

const ProductItem = ({ product, onViewDetail, onAddToCart }) => {
  // below 3 lines are to enable ripple effect for android devices
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    // useForeground will apply the ripple effect for the entire component
    <View style={styles.product}>
      <TouchableCmp onPress={onViewDetail} useForeground>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: product.imageUrl }} />
          </View>
          <View style={styles.details}>
            <Text style={{ ...styles.title, ...theme.typography.h3 }}>
              {product.title}
            </Text>
            <Text style={{ ...styles.price, ...theme.typography.h5 }}>
              ${product.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.actions}>
            <Button
              color={theme.palette.primary}
              title='View Details'
              onPress={onViewDetail}
            />
            <Button
              color={theme.palette.primary}
              title='To Cart'
              onPress={onAddToCart}
            />
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: theme.palette.black,
    shadowOpacity: 0.27,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: theme.palette.white,
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    marginVertical: 2,
  },
  price: {
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 25,
  },
});

export default ProductItem;
