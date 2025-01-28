import React from "react";
import ItemCard from "./ItemCard";
import "../styles/itemList.css";

const ItemList = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <h2>No hay productos disponibles</h2>;
  }

  // Solo mostrar 6 productos por sección
  const productosAMostrar = items.slice(0, 6);

  return (
    <div className="item-list">
      {productosAMostrar.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;






