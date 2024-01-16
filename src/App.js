import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Categories from "./pages/collection/Collection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import Collection from "./pages/collection/Collection";
import Payments from "./components/payments/Payments"

function App() {
 
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCategories());
    }, []);
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> 
          <Route path="/payments/:status" element={<Payments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
