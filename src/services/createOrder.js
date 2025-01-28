import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const createOrder = async (cartItems, totalPrice, userData) => {
  try {
    const orderRef = collection(db, "orders");

    const order = {
      buyer: userData, // Información del usuario
      items: cartItems.map(item => ({
        id: item.id,
        name: item.nombre,
        price: item.precio,
        quantity: item.quantity,
      })),
      total: totalPrice,
      date: serverTimestamp(),
    };

    const docRef = await addDoc(orderRef, order);
    return docRef.id; // Devuelve el ID de la orden creada
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
};
