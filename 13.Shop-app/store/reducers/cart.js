import CartItem from '../../models/cart-item';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

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
    default:
      return state;
  }
};
