import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Button, FlatList, Alert } from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import { deleteProduct } from '../../store/actions';
import NAVIGATION from '../../constants/navigation';
import theme from '../../theme';

const UserProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      { text: 'No', style: 'default' },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          product={itemData.item}
          onSelect={() =>
            navigation.navigate(NAVIGATION.EditProduct, {
              productId: itemData.item.id,
            })
          }
        >
          <Button
            color={theme.palette.primary}
            title='Edit'
            onPress={() =>
              navigation.navigate(NAVIGATION.EditProduct, {
                productId: itemData.item.id,
              })
            }
          />
          <Button
            color={theme.palette.primary}
            title='Delete'
            onPress={() => deleteHandler(itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default UserProductsScreen;
