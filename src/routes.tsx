import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import Register from './pages/register';
import HomeScreen from './pages/home';
import CheckoutPage from './pages/checkout_Address/Index';
import CheckoutPagePayment from './pages/checkout_payment';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/checkoutpayment" element={<CheckoutPagePayment />} />
            </Routes>
        </Router>
    );
}
