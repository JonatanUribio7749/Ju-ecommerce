import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar producto al carrito
    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    // Remover producto del carrito
    const removeFromCart = (id) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== id);
        setCart(updatedCart);
    };

    // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Calcular total de ítems en el carrito
    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };
    

    // Calcular el precio total del carrito
    const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0); // ✅ Como variable

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice, // ✅ Se mantiene como variable
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

