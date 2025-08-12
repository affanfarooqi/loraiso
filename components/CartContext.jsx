"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Cart reducer
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload || [],
      };
    
    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
  isOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from memory on component mount (no localStorage in artifacts)
  useEffect(() => {
    // In a real app, you would load from localStorage here
    // For artifacts, we'll just use in-memory state
  }, []);

  // Save cart to memory whenever it changes (no localStorage in artifacts)
  useEffect(() => {
    // In a real app, you would save to localStorage here
    // localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  // Cart actions
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    // Show a brief notification (you could implement toast notifications)
    console.log(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Cart calculations
  const cartTotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = state.items.reduce((count, item) => count + item.quantity, 0);

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isOpen: state.isOpen,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}