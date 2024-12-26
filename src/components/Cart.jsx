// src/components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart, clearCart, totalItems } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h2>Carrito ({totalItems} productos)</h2>
            {cart.length === 0 ? (
                <p className="cart-empty">Tu carrito está vacío.</p>
            ) : (
                <div className="cart-summary">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <p className="cart-item-details">
                                {item.name} - ${item.price} x {item.quantity}
                            </p>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                Eliminar
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>
                            <strong>Total: ${calculateTotal()}</strong>
                        </p>
                        <div className="cart-actions">
                            <button className="clear-cart-btn" onClick={clearCart}>
                                Vaciar carrito
                            </button>
                            <button className="checkout-btn">
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
