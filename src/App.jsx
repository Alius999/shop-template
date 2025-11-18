import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Cart from './pages/cart/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Favorites from './pages/favorites/Favorites.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Support from './pages/Support.jsx';
import Contacts from './pages/contact/Contacts.jsx';
import NotFound from './pages/NotFound.jsx';
import LogIn from './pages/login/LogIn.jsx';
import About from './pages/about/About.jsx';
import ItemPage from './components/itempage/ItemPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ItemPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


