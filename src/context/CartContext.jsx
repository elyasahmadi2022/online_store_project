import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  items: [],
  coupon: null,
  wishlist: []
};

// Action types
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  APPLY_COUPON: 'APPLY_COUPON',
  REMOVE_COUPON: 'REMOVE_COUPON',
  MOVE_TO_WISHLIST: 'MOVE_TO_WISHLIST',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        // If item already exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return { ...state, items: updatedItems };
      } else {
        // Add new item
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case actionTypes.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case actionTypes.APPLY_COUPON:
      return {
        ...state,
        coupon: action.payload
      };

    case actionTypes.REMOVE_COUPON:
      return {
        ...state,
        coupon: null
      };

    case actionTypes.MOVE_TO_WISHLIST:
      const itemToMove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        wishlist: [...state.wishlist, itemToMove]
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    case actionTypes.LOAD_CART:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : initialState;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // Actions
  const addToCart = (item) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      dispatch({ type: actionTypes.UPDATE_QUANTITY, payload: { id: itemId, quantity } });
    }
  };

  const applyCoupon = (coupon) => {
    dispatch({ type: actionTypes.APPLY_COUPON, payload: coupon });
  };

  const removeCoupon = () => {
    dispatch({ type: actionTypes.REMOVE_COUPON });
  };

  const moveToWishlist = (itemId) => {
    dispatch({ type: actionTypes.MOVE_TO_WISHLIST, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  const loadCart = (data) => {
    dispatch({ type: actionTypes.LOAD_CART, payload: data });
  };

  // Calculate pricing
  const calculateSubtotal = () => {
    return state.items.reduce((total, item) => {
      return total + (item.priceDiscounted || item.priceOriginal) * item.quantity;
    }, 0);
  };

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    
    if (state.coupon) {
      if (state.coupon.type === 'percentage') {
        return subtotal * (state.coupon.value / 100);
      } else if (state.coupon.type === 'fixed') {
        return Math.min(state.coupon.value, subtotal); // Can't discount more than subtotal
      }
    }
    
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    return subtotal - discount;
  };

  // Check if cart is empty
  const isEmpty = () => {
    return state.items.length === 0;
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyCoupon,
        removeCoupon,
        moveToWishlist,
        clearCart,
        loadCart,
        calculateSubtotal,
        calculateDiscount,
        calculateTotal,
        isEmpty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};