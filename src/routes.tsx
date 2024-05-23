import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import ForgotPassword from './pages/forgot_password';
import Register from './pages/register';
import HomeScreen from './pages/home';
<<<<<<< HEAD
import CheckoutPage from './pages/checkout_address/Index';
import ProductList from './pages/product_list';
import ProductDetail from './pages/product_detail';
import About from './pages/about';
=======
import CheckoutPage from './pages/checkout_Address/Index';
import CheckoutPagePayment from './pages/checkout_payment';
import Cart from './components/Cart';
>>>>>>> b8666a77a3cc28b30076316b8b411481e93f3744

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<CheckoutPage />} />
<<<<<<< HEAD
                <Route path="/about" element={<About />} />
=======
                <Route path="/checkoutpayment" element={<CheckoutPagePayment />} />
                <Route path="/cart" element={<Cart />} />
>>>>>>> b8666a77a3cc28b30076316b8b411481e93f3744
            </Routes>
        </Router>
    );
}
