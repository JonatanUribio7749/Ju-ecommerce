// components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const allItems = [
        { id: 1, name: 'Laptop', description: 'Laptop de última generación', price: 1500 },
        { id: 2, name: 'Camiseta', description: 'Camiseta de algodón 100%', price: 30 },
        { id: 3, name: 'Auriculares', description: 'Auriculares con cancelación de ruido', price: 200 },
        { id: 4, name: 'Bolso', description: 'Bolso de cuero elegante', price: 50 },
      ];

      const selectedItem = allItems.find((item) => item.id === parseInt(itemId));
      setItem(selectedItem);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div style={{ padding: '20px' }}>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
