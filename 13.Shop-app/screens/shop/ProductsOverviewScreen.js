import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import NAVIGATION from '../../constants/navigation';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          product={itemData.item}
          onViewDetail={() =>
            navigation.navigate(NAVIGATION.ProductDetail, {
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            })
          }
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
