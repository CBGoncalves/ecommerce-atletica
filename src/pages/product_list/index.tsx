import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product_card";
import productData from "../../mocks/products.json";

import "./style.css";

export default function ProductList() {
    return (
        <div className="product-list">
            <Navbar />
            <div className="product-grid">
                {productData.products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        alt={product.description}
                        titleProduct={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}