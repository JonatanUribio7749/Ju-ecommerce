// src/components/ItemList.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const ItemList = ({ items }) => {
    const { addToCart } = useCart();

    return (
        <div className="item-list">
            {items.map((item) => (
                <div key={item.id} className="item-card">
                    <h3>{item.name}</h3>
                    <p className="item-price">Precio: <strong>${item.price}</strong></p>
                    <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                        Agregar al carrito
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
