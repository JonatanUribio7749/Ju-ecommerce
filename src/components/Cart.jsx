// components/Cart.jsx
import React from 'react';

const Cart = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Carrito de Compras</h1>
      <p>Aquí se mostrarán los productos agregados al carrito.</p>
      <button style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Finalizar compra
      </button>
    </div>
  );
};

export default Cart;
