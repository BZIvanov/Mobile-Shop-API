import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Button } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import { addToCart } from '../../store/actions/cart';
import NAVIGATION from '../../constants/navigation';
import theme from '../../theme';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    navigation.navigate(NAVIGATION.ProductDetail, {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          product={itemData.item}
          onSelect={() =>
            selectItemHandler(itemData.item.id, itemData.item.title)
          }
        >
          <Button
            color={theme.palette.primary}
            title='View Details'
            onPress={() =>
              selectItemHandler(itemData.item.id, itemData.item.title)
            }
          />
          <Button
            color={theme.palette.primary}
            title='To Cart'
            onPress={() => dispatch(addToCart(itemData.item))}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
