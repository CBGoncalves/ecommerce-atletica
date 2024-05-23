import React, { useState } from "react";
import Navbar from "../../components/navbar";
import productData from "../../mocks/products.json";
import { useParams } from "react-router-dom";

import "./style.css";
import ImageCarousel from "../../components/image_carousel";
import SizeSelector from "../../components/size_selector";
import IconButton from "../../components/icon_button";

export default function ProductDetail() {

    const images = [
        './assets/img/oversized-minotaurus.png',
        './assets/img/blusa-header.png',
        './assets/img/caneca-gladiador.png',
        './assets/img/camisetas.png',
        './assets/img/caneca-guerreiro.png',
        './assets/img/uniformes.png'
    ];

    const sizes = ['P', 'M', 'G', 'GG', 'XG'];
    const [selectedSize, setSelectedSize] = useState('M');

    const handleSelectSize = (size: string) => {
        setSelectedSize(size);
    };

    return (
        <div className="product-detail">
            <Navbar />
            <div className="product-detail-content">
                <ImageCarousel images={images} />
                <div className="size-selector">
                    <SizeSelector
                        sizes={sizes}
                        selectedSize={selectedSize}
                        onSelectSize={handleSelectSize}
                    />
                </div>
                <div className="bottom-product">
                    <div className="product-text">
                        <h1>Camiseta Time Basquete Minotaurus</h1>
                        <h2>R$ 70,00</h2>
                        <p>Vista-se com a força do nosso time de basquete com o seu uniforme da temporada de 2024, estampada com o símbolo da nossa atlética, o MINOTAURUS.</p>
                    </div>
                    <IconButton text="Adicionar ao Carrinho" id="icon-button" />
                </div>
            </div>
        </div>
    );
}