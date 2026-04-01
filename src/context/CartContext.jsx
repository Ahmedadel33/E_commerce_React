import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // إضافة منتج للعربة
  const addToCart = (product) => {
    setCart(prev => {
      console.log(prev);
      // ركز هنا استخدمنا _id عشان يتوافق مع MongoDB
      const exists = prev.find(p => p._id === product._id);
      
      if (exists) {
        return prev.map(p => 
          p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p._id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, p) => acc + (p.price * p.quantity), 0);
  
  const cartCount = cart.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);