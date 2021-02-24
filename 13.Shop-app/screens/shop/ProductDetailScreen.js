import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Text,
  View,
} from 'react-native';
import { addToCart } from '../../store/actions/cart';
import theme from '../../theme';

const ProductDetailScreen = ({ route }) => {
  const productId = route.params.productId;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={theme.palette.primary}
          title='Add To Cart'
          onPress={() => dispatch(addToCart(selectedProduct))}
        />
      </View>
      <Text style={{ ...styles.price, ...theme.typography.h2 }}>
        ${selectedProduct.price.toFixed(2)}
      </Text>
      <Text style={{ ...styles.description, ...theme.typography.h6 }}>
        {selectedProduct.description}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
