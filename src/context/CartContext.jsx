import { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // Increase quantity of existing item
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new item
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE_ONE_FROM_CART": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      const numberInCart = existingItem.quantity;

      // If more than one in cart, decrease quantity
      if (numberInCart > 1) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      // Remove item by ID
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "REMOVE_ALL_FROM_CART": {
      // Remove item by ID
      return state.filter((item) => item.id !== action.payload.id);
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Actions
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeOneFromCart = (id) => {
    dispatch({ type: "REMOVE_ONE_FROM_CART", payload: { id } });
  };

  const removeAllFromCart = (id) => {
    dispatch({ type: "REMOVE_ALL_FROM_CART", payload: { id } });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeOneFromCart, removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
