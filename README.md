NavegaLasRutas+Uribio
Este proyecto implementa una aplicación de e-commerce que permite navegar entre diferentes vistas utilizando React Router, cumpliendo con las consignas establecidas. A continuación, detallo las funcionalidades implementadas y cómo se cumplen los requisitos del trabajo.

📚 Descripción del proyecto
La aplicación permite a los usuarios:

Seleccionar categorías desde el menú: Cada categoría tiene productos específicos que se filtran dinámicamente.
Visualizar un listado de productos: Los productos aparecen organizados y se pueden agregar al carrito.
Ver el detalle de un producto específico: Se accede a una página con información detallada del producto.
Gestionar un carrito de compras: Los productos se pueden agregar o eliminar del carrito, y este se actualiza dinámicamente.
📋 Cumplimiento de consignas
✅ Objetivos
Se implementó la funcionalidad de navegación utilizando React Router.
Se desarrolló la navegabilidad básica, permitiendo ir desde el catálogo al detalle de cada ítem.
✅ Requisitos
React Router y rutas: Se configuraron rutas para:
/ (Inicio)
/category/:categoryId (Categorías)
/item/:itemId (Detalle del producto)
/cart (Carrito)
* (404 - Página no encontrada).
División de componentes:
Contenedores: ItemListContainer, ItemDetailContainer.
Presentación: ItemList, ItemDetail.
Promises y asincronía: La carga de datos simula un retraso con setTimeout.
Uso de métodos: Array.map() se usa para listar los productos con una clave única key.
URL dinámicas: useParams se emplea para leer parámetros dinámicos de las rutas.
Ruta 404: Implementada para manejar errores de navegación.
✅ Estilo y diseño
El diseño es responsive y utiliza una interfaz moderna y accesible.
Se incluyeron transiciones y efectos en los elementos interactivos.
El menú de navegación se destaca por su diseño visual y funcional.
✅ Extras añadidos
Se agregó un contador en el carrito para mejorar la experiencia del usuario.
Diseño optimizado de las tarjetas de productos y vistas de detalle.

🛠 Cómo ejecutar el proyecto

git clone https://github.com/JonatanUribio7749/Ju-ecommerce.git
npm install
npm run dev


