import React, { useEffect, useRef } from "react";
import "./style.css";
import CheckoutPage from "../../pages/checkout_address/Index";
import { Navigate } from "react-router-dom";
import Button from "../button";

interface CartProps {
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
    const cartRef = useRef<HTMLDivElement>(null);

    const items = [
        { id: 1, name: "Camiseta Time Basquete Minotaurus", price: 70.00, image: "./assets/img/uniformes.png" },
        { id: 2, name: "Caneca Gladiadores", price: 40.00, image: "./assets/img/caneca-gladiador.png" },
        { id: 3, name: "Camiseta Oversized Minotaurus", price: 80.00, image: "./assets/img/oversized-minotaurus.png" }
    ];


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="cart show" ref={cartRef}>
            <h2>Meu Carrinho</h2>
            <div className="cart-items">
                {items.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <p>{item.name}</p>
                            <p>R$ {item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button id="checkout-button" link="/checkout" text="Finalizar Compra" />

        </div>
    );
};

export default Cart;
