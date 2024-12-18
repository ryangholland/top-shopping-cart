import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import ItemPage from "./pages/ItemPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/item/:id" element={<ItemPage />} /> 
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
