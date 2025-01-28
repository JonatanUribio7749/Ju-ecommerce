📦 Proyecto Final - E-commerce con React

🛒 Electro X - Tienda Online

Este proyecto es una Single Page Application (SPA) de E-commerce desarrollada en React. Implementa una tienda en línea con carrito de compras y finalización de compra con Firebase Firestore.

🚀 Tecnologías utilizadas

⚛ React JS (Componentes, Hooks, Context API)

🔄 React Router Dom (Navegación entre páginas sin recarga)

🎨 CSS (Diseño estilizado y responsive)

☁ Firebase Firestore (Base de datos en la nube)

📌 Características principales

 1. Catálogo de Productos

✔ Carga dinámica de productos desde Firebase.
✔ Navegación entre categorías como Electrónica, Ropa, Accesorios.
✔ Cada producto tiene su propia vista de detalle (ItemDetailContainer).
✔ Se puede seleccionar la cantidad de productos a comprar con ItemCount.
✔ Se muestra la cantidad seleccionada directamente en la tarjeta del producto.

🛒 2. Carrito de Compras

✔ CartContext maneja el estado global del carrito.
✔ Se pueden agregar, eliminar y vaciar productos del carrito.
✔ Se calcula el total de la compra dinámicamente.✔ Se muestra la cantidad de productos en NavBar.
✔ Diseño limpio y botones con estilos (Eliminar, Vaciar Carrito).

✅ 3. Finalización de Compra

✔ Formulario para ingresar Nombre, Email y Teléfono antes de finalizar.
✔ Al confirmar la compra, los datos se guardan en Firestore (orders).
✔ Se muestra un Número de Orden para el usuario.
✔ El carrito se vacía automáticamente después de la compra.✔ Se maneja carga de datos y mensajes condicionales (Carrito vacío, Compra exitosa).

📁 Estructura basica del Proyecto

📂 src/
 ┣ 📂 components/
 ┃ ┣ 📜 NavBar.jsx
 ┃ ┣ 📜 ItemListContainer.jsx
 ┃ ┣ 📜 ItemDetailContainer.jsx
 ┃ ┣ 📜 Cart.jsx
 ┃ ┣ 📜 CheckoutForm.jsx
 ┣ 📂 context/
 ┃ ┣ 📜 CartContext.jsx
 ┣ 📂 services/
 ┃ ┣ 📜 createOrder.js
 ┣ 📂 styles/
 ┃ ┣ 📜 cart.css
 ┣ 📜 App.js
 ┣ 📜 main.js

 🔧 Instalación y Configuración

 1️⃣ Clonar el repositorio

git clone https://github.com/JonatanUribio7749/Ju-ecommerce.git

2️⃣ Instalar dependencias

npm install

3️⃣ Configurar Firebase

Crear un archivo .env con las credenciales de Firebase:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id

4️⃣ Ejecutar el proyecto
npm run dev

✅ Cumple con todas las consignas del proyecto:

Listado de productos con Firestore ✅

Carrito funcional con React Context ✅

Finalización de compra en Firestore ✅

Diseño responsive y buena UX/UI ✅

