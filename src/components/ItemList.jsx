// components/ItemList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <Link to={`/item/${item.id}`} className="details-link">
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
