import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemProvider } from "./context/ItemContext";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ItemPage from "./pages/ItemPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ItemProvider>
          <CartProvider>
            <div className="d-flex flex-column min-vh-100">
              <Header />

              <main className="flex-grow-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/item/:id" element={<ItemPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </CartProvider>
        </ItemProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
