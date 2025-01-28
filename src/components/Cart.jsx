import { createOrder } from "../services/createOrder";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import "../styles/cart.css"; // ✅ Importando estilos correctamente

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Estado para los datos del comprador
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (cart.length === 0) {
      setOrderId(null);
    }
  }, [cart]);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    if (!buyer.name || !buyer.email || !buyer.phone) {
      alert("Por favor, completa todos los campos antes de finalizar la compra.");
      return;
    }

    setLoading(true);

    try {
      const id = await createOrder(cart, totalPrice, buyer); // ✅ totalPrice sin paréntesis
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error("Error al procesar la compra:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-container">
      <h2>🛒 Carrito ({cart.length} productos)</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.nombre}</h3>
              <p>Precio: <strong>${item.precio}</strong></p>
              <p>Cantidad: <strong>{item.quantity}</strong></p>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">❌ Eliminar</button>
            </div>
          ))}

          <h3 className="cart-total">Total: <strong>${totalPrice}</strong></h3> {/* ✅ totalPrice sin () */}

          {/* Formulario de datos del comprador */}
          <div className="buyer-form">
            <h3>🔹 Datos del comprador</h3>
            <input
              type="text"
              placeholder="Nombre"
              value={buyer.name}
              onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={buyer.email}
              onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={buyer.phone}
              onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
            />
          </div>

          {orderId ? (
            <p className="order-success">
              🎉 ¡Compra realizada! Número de orden: <strong>{orderId}</strong>
            </p>
          ) : (
            <>
              <button onClick={handleCheckout} className="checkout-btn" disabled={loading}>
                {loading ? "Procesando..." : "Finalizar compra"}
              </button>
              <button onClick={clearCart} className="clear-btn">🗑️ Vaciar carrito</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;







