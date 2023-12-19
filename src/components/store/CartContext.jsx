import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // Find index of existing item in state.items array
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // Create a copy of the state items array
    const updatedItems = [...state.items];

    // If item already exists, update its quantity
    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // If item doesn't exist, add it with quantity 1
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    // Return updated state with modified items array
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedItems = [...state.items];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  // If action type is not "ADD_ITEM", return the original state
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
