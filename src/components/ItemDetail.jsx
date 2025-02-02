import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";

const ItemDetail = ({ item }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(0);

    const handleAddToCart = (quantity) => {
        addToCart({ ...item, quantity });
        setAdded(quantity); // Actualizar la vista previa
    };

    return (
        <div className="item-detail">
            <h2>{item.nombre}</h2>
            <p>Categoría: {item.categoria}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock disponible: {item.stock}</p>

            {item.stock > 0 ? (
                <>
                    <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
                    {added > 0 && <p style={{ color: "green" }}>Agregado: {added} unidades</p>}
                </>
            ) : (
                <p style={{ color: "red" }}>Producto sin stock</p>
            )}
        </div>
    );
};

export default ItemDetail;

