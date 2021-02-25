import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Image,
  Text,
  Platform,
} from 'react-native';
import Card from '../UI/Card';
import theme from '../../theme';

const ProductItem = ({ product, onSelect, children }) => {
  // below 3 lines are to enable ripple effect for android devices
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    // useForeground will apply the ripple effect for the entire component
    <Card customStyles={styles.product}>
      <TouchableCmp onPress={onSelect} useForeground>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: product.imageUrl }} />
          </View>
          <View style={styles.details}>
            <Text style={{ ...styles.title, ...theme.typography.h3 }}>
              {product.title}
            </Text>
            <Text style={{ ...styles.price, ...theme.typography.h6 }}>
              ${product.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.actions}>{children}</View>
        </View>
      </TouchableCmp>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
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
    height: '17%',
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
    height: '23%',
    paddingHorizontal: 25,
  },
});

export default ProductItem;
