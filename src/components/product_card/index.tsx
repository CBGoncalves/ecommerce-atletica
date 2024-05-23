import React from "react";
import Navbar from "../../components/navbar";

import "./style.css";
import { useNavigate } from "react-router-dom";

type Props = {
    id: number;
    img: string;
    alt: string;
    titleProduct: string;
    description: string;
    price: string;
}

export default function ProductCard(props: Props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/product");
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <img className="product-img" src={props.img} alt={props.alt} />
            <h3 className="product-title">{props.titleProduct}</h3>
            <p className="product-description">{props.description}</p>
            <h3 className="product-price">R$ {props.price}</h3>
        </div>
    );
}