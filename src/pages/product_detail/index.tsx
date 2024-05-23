import React from "react";
import Navbar from "../../components/navbar";
import productData from "../../mocks/products.json";
import { useParams } from "react-router-dom";

import "./style.css";

export default function ProductDetail() {

    const { id } = useParams<{ id: string }>();
    const product = productData.products.filter(p => p.id === parseInt(id as string));

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <div className="product-detail">
            <Navbar />
            <div className="product-detail-content">
                <img src={product.img} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
}