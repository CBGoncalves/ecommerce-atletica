import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Cart from "../cart";

export default function Navbar() {
    const [cartVisible, setCartVisible] = useState(false);

    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <>
            <nav className="navbar">
                <img className="navbar-logo" src="./assets/img/logo.png" alt="Logo" />
                <a className="icon-home"><Link className="link-navbar" to="/"><img src="./assets/icons/home.svg" alt="Home" />Home</Link></a>
                <a className="icon-bag"><Link className="link-navbar" to="/products"><img src="./assets/icons/bag.svg" alt="Produtos" />Produtos</Link></a>
                <a className="icon-about"><Link className="link-navbar" to="/about"><img src="./assets/icons/article.svg" alt="Sobre Nós" />Sobre Nós</Link></a>
                <div className="end-icons">
                    <a className="icon-profile"><Link to="/login"><img src="./assets/icons/profile.svg" alt="Meu Perfil" /></Link></a>
                    <a className="icon-cart" onClick={toggleCart}><img src="./assets/icons/cart.svg" alt="Carrinho" /></a>
                </div>
            </nav>
            {cartVisible && <Cart onClose={toggleCart} />}
        </>
    );
}
