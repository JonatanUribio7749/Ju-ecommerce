import React from "react";
import { useCart } from "../context/CartContext.jsx";
import "../styles/itemCard.css";  

const ItemCard = ({ item }) => {
  const { addToCart, cart } = useCart();

  // Buscar cuántas veces se ha agregado este producto al carrito
  const productInCart = cart.find((cartItem) => cartItem.id === item.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className="card">
      {item.imagen && <img src={item.imagen} alt={item.nombre} className="card-img" />}
      <div className="card-info">
        <h3>{item.nombre}</h3>
        <p className="card-category">{item.categoria}</p>
        <p className="card-price">
          Precio: <strong>${item.precio}</strong>
        </p>
        
        {/* Mostrar la cantidad actual en el carrito */}
        <p className="card-quantity">
          Agregado: <strong>{quantity}</strong> veces
        </p>

        <button className="card-btn" onClick={() => addToCart(item)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCard;





