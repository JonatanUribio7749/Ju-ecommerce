import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./itemList.css";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const mockItems = [
      { id: 1, name: "Laptop", price: 1500, category: "electronica" },
      { id: 2, name: "Camiseta", price: 30, category: "ropa" },
      { id: 3, name: "Auriculares", price: 200, category: "electronica" },
      { id: 4, name: "Bolso", price: 50, category: "accesorios" },
    ];

    if (categoryId) {
      setItems(mockItems.filter((item) => item.category === categoryId));
    } else {
      setItems(mockItems);
    }
  }, [categoryId]);

  return (
    <main className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      <ItemList items={items} />
    </main>
  );
};

export default ItemListContainer;
