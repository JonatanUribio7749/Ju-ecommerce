import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";


const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greeting="Bienvenido a nuestra tienda moderna" />} 
          />
          <Route 
            path="/category/:categoryId" 
            element={<ItemListContainer key={window.location.pathname} />} 
          />
          <Route 
            path="/item/:itemId" 
            element={<ItemDetailContainer />} 
          />
          <Route 
            path="/cart" 
            element={<Cart />} 
          />
          <Route 
            path="*" 
            element={<h2>404 - Página no encontrada</h2>} 
          />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

