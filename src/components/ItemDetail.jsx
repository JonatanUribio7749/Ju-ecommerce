// components/ItemDetail.jsx
import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <button style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
