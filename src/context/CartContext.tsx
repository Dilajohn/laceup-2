'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  total: number;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'laceup_cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (storedCart) {
        try {
          setCart(JSON.parse(storedCart));
        } catch (e) {
          console.error('Failed to parse stored cart', e);
          setCart([]);
        }
      }
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  // Calculate total price dynamically
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Add item or update if exists
  function addToCart(item: Omit<CartItem, 'quantity'>, quantity: number = 1) {
    setCart((curr) => {
      const existingIndex = curr.findIndex((ci) => ci.id === item.id);
      if (existingIndex > -1) {
        // Update quantity
        const updated = [...curr];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...curr, { ...item, quantity }];
    });
  }

  // Remove item by id
  function removeFromCart(id: string) {
    setCart((curr) => curr.filter((item) => item.id !== id));
  }

  // Update quantity (only if >=1)
  function updateQuantity(id: string, quantity: number) {
    if (quantity < 1) return;
    setCart((curr) =>
      curr.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  // Clear whole cart
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook for easier consumption in components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
