// components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = [
        { id: 1, name: 'Laptop', category: 'electronica', price: 1500 },
        { id: 2, name: 'Camiseta', category: 'ropa', price: 30 },
        { id: 3, name: 'Auriculares', category: 'electronica', price: 200 },
        { id: 4, name: 'Bolso', category: 'accesorios', price: 50 },
      ];

      const filteredItems = categoryId
        ? allItems.filter((item) => item.category === categoryId)
        : allItems;

      setItems(filteredItems);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
