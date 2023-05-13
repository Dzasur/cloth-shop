import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { CartContext, Context, RemoveCart } from "./Context";

export let itemInCart: any;
export let Items: any;
export let Products: any;

export type ProductItemType = {
  title: string;
  id: number;
  price: number;
  image: string;
  category: string;
  rate: number;
  count: number;
};

function App() {
  const [products, setProducts] = useState<Array<Object> | null>([]);

  const [isOpen, setOpen] = useState<boolean>(false);

  const [cart, setCart] = useState<Array<any>>([]);

  const addToCart = useCallback(
    (product: ProductItemType) => {
      setCart([...cart, product]);
    },
    [cart]
  );

  const removeToCart = useCallback(
    (id: number) => {
      const newCart = cart.filter((item: ProductItemType) => item.id !== id);
      setCart(newCart);
    },
    [cart]
  );

  const clearCart = () => setCart([]);

  useEffect(() => {
    const fetchProducts = async () =>
      await fetch("https://fakestoreapi.com/products")
        .then((resp) => resp.json())
        .then((data) => setProducts(data));
    fetchProducts();
  }, []);

  itemInCart = cart.length;
  Items = cart;
  Products = products;

  if (!products) {
    return (
      <h1 className="flex h-screen justify-center items-center text-5xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className={`overflow-hidden`}>
      <Context.Provider value={products}>
        <CartContext.Provider value={addToCart}>
          <RemoveCart.Provider value={removeToCart}>
            <BrowserRouter>
              <Header isOpen={isOpen} setOpen={setOpen} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Sidebar
                clearCart={clearCart}
                isOpen={isOpen}
                setOpen={setOpen}
              />
              <Footer />
            </BrowserRouter>
          </RemoveCart.Provider>
        </CartContext.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
