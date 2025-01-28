import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        console.log("⚡ Obteniendo productos de Firebase...");
        const querySnapshot = await getDocs(collection(db, "productos"));
        let productosFirebase = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("✅ Productos obtenidos desde Firebase:", productosFirebase);
        console.log("🔍 Categoría actual en la URL:", categoryId);

        if (!categoryId) {
          console.error("❌ ERROR: `categoryId` es undefined. React Router no está obteniendo la URL correctamente.");
          setProductos(productosFirebase);
          return;
        }

        // 🔹 Normalización de datos para evitar errores de comparación
        const categoriaURL = categoryId.trim().toLowerCase();
        const productosFiltrados = productosFirebase.filter(
          (producto) => producto.categoria?.trim().toLowerCase() === categoriaURL
        );

        console.log("📌 Productos después del filtrado:", productosFiltrados);
        setProductos(productosFiltrados);
      } catch (error) {
        console.error("❌ Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length > 0 ? (
        <ItemList items={productos} />
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ItemListContainer;

















