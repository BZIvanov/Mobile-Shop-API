import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product';
import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../types';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        action.payload.title,
        action.payload.imageUrl,
        action.payload.description,
        +action.payload.price
      );
      console.log(action, newProduct);
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      const updatedProduct = new Product(
        action.payload.id,
        state.userProducts[productIndex].ownerId,
        action.payload.product.title,
        action.payload.product.imageUrl,
        action.payload.product.description,
        state.userProducts[productIndex].price
      );

      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;

      const availableProductIndex = state.availableProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;

      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.payload
        ),
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
