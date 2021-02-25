import CartItem from '../../models/cart-item';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ORDER,
  DELETE_PRODUCT,
} from '../types';

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, price, title } = action.payload;

      let cartItem;
      if (state.items[id]) {
        cartItem = new CartItem(
          state.items[id].quantity + 1,
          price,
          title,
          state.items[id].sum + price
        );
      } else {
        cartItem = new CartItem(1, price, title, price);
      }

      return {
        ...state,
        items: { ...state.items, [id]: cartItem },
        totalAmount: state.totalAmount + price,
      };
    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.payload];

      let updatedCartItems;
      if (selectedItem.quantity > 1) {
        const updatedCartItem = {
          ...selectedItem,
          quantity: selectedItem.quantity - 1,
          sum: selectedItem.sum - selectedItem.productPrice,
        };
        updatedCartItems = {
          ...state.items,
          [action.payload]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.payload];
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedItem.productPrice,
      };
    case ADD_ORDER:
      // ADD_ORDER is in 2 reducers because of the functionality we want to achieve, more specifically after making order we want to clear the cart
      return initialState;
    case DELETE_PRODUCT:
      if (!state.items[action.payload]) {
        return state;
      }

      const itemTotal = state.items[action.payload].sum;
      const updatedItems = { ...state.items };
      delete updatedItems[action.payload];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal,
      };
    default:
      return state;
  }
};
