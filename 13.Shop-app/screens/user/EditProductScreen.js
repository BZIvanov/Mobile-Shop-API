import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import theme from '../../theme';

const EditProductScreen = ({ route, navigation }) => {
  const products = useSelector((state) => state.products.userProducts);

  let productToEdit;
  if (route.params) {
    productToEdit = products.find(
      (product) => product.id === route.params.productId
    );
  }

  const [title, setTitle] = useState(productToEdit ? productToEdit.title : '');
  const [imageUrl, setImageUrl] = useState(
    productToEdit ? productToEdit.imageUrl : ''
  );
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(
    productToEdit ? productToEdit.description : ''
  );

  useEffect(() => {
    navigation.dispatch(
      CommonActions.setParams({
        product: { title, imageUrl, price, description },
      })
    );
  }, [title, imageUrl, price, description]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {productToEdit ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: theme.typography.fontBold,
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;
