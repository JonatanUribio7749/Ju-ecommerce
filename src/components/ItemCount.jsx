import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const [added, setAdded] = useState(0); // Nueva variable para mostrar lo agregado

    const handleIncrease = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAdd = () => {
        onAdd(quantity);
        setAdded(added + quantity); // Actualizar lo agregado antes de ir al carrito
    };

    return (
        <div className="item-count">
            <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease} disabled={quantity >= stock}>+</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
            
            {/* Mostrar la cantidad agregada al carrito */}
            {added > 0 && <p>Agregado: {added} unidades</p>}
        </div>
    );
};

export default ItemCount;
