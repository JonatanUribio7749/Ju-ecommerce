import React from "react";

const ItemList = ({ items, onAddToCart }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <button onClick={() => onAddToCart(item)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
