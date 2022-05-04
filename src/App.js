import React, { useState } from "react"
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import Products from './pages/Products';


function App() {
   const [cartItems, setCartItems] = useState([]);  
   const [summary, setSummary] = useState (0);
   

    const addProduct = (newCartItem) => {
      setCartItems([...cartItems, newCartItem]);

    if (summary === 0) {
      setSummary(newCartItem.price)
  } else {
      setSummary(summary + newCartItem.price)
    }
  }  

  const deleteCart = () => {
    setCartItems([]);
    setSummary(summary === 0);
  } 

  
  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={cartItems} countCartItems={cartItems.length} setCartItems={setCartItems} summary={summary} deleteCart={deleteCart}/>

        <Routes>
          <Route path="/" element={<Products setSummary={setSummary} addProduct={addProduct} />}></Route>
          
          <Route path="/product/:id" element={<Product addProduct={addProduct} />} />
          
          <Route path="/checkout" element={<Checkout cartItems = {cartItems} addProduct={addProduct} summary={summary} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;