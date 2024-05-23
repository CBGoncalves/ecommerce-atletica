import React from "react";
import Navbar from "../../components/navbar";

import "./style.css";
import Button from "../../components/button";
import HomeCard from "../../components/home_card";

var emphasisTextButton: string = "Ver Produto";
var emphasisTitleColor: string = "#FFFFFF"
var categoryTextButton: string = "Ver Categoria";
var categoryTitleColor: string = "#0F1F2C"

export default function HomeScreen() {
    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="header-home">
                    <div className="header-text-area">
                        <h1>Vista-se com<br />a nossa força!</h1>
                        <Button id="header-button" link="/products" text="Ver Produtos" />
                    </div>
                    <img className="header-img" src="./assets/img/blusa-header.png" alt="Blusa com logo da atlética" />
                </div>
                <div className="emphasis-area">
                    <h1>Produtos em Destaque</h1>
                    <div className="emphasis-cards">
                        <HomeCard
                            imgAreaBg="#FFFFFF"
                            img="./assets/img/caneca-gladiador.png"
                            alt="Caneca Gladiador"
                            textAreaBg="#0F1F2C"
                            title="Caneca de Metal Gladiadores"
                            titleColor={emphasisTitleColor}
                            textButton={emphasisTextButton}
                            link="/"
                        />
                        <HomeCard
                            imgAreaBg="#FFFFFF"
                            img="./assets/img/oversized-minotaurus.png"
                            alt="Caneca Gladiador"
                            textAreaBg="#0F1F2C"
                            title="Camiseta Oversized Minotaurus"
                            titleColor={emphasisTitleColor}
                            textButton={emphasisTextButton}
                            link="/"
                        />
                        <HomeCard
                            imgAreaBg="#FFFFFF"
                            img="./assets/img/blusa-header.png"
                            alt="Caneca Gladiador"
                            textAreaBg="#0F1F2C"
                            title="Blusa gola careca MinoAngels"
                            titleColor={emphasisTitleColor}
                            textButton={emphasisTextButton}
                            link="/"
                        />
                    </div>
                </div>
                <div className="category-area">
                    <h1>Categorias</h1>
                    <div className="category-cards">
                        <HomeCard
                            imgAreaBg="#D30A36"
                            img="./assets/img/caneca-gladiador.png"
                            alt="Canecas"
                            textAreaBg="#FFFFFF"
                            title="Canecas"
                            titleColor={categoryTitleColor}
                            textButton={categoryTextButton}
                            link="/"
                        />
                        <HomeCard
                            imgAreaBg="#D30A36"
                            img="./assets/img/uniformes.png"
                            alt="Uniformes"
                            textAreaBg="#FFFFFF"
                            title="Uniformes"
                            titleColor={categoryTitleColor}
                            textButton={categoryTextButton}
                            link="/"
                        />
                        <HomeCard
                            imgAreaBg="#D30A36"
                            img="./assets/img/camisetas.png"
                            alt="Camisetas"
                            textAreaBg="#FFFFFF"
                            title="Camisetas"
                            titleColor={categoryTitleColor}
                            textButton={categoryTextButton}
                            link="/"
                        />
                        <HomeCard
                            imgAreaBg="#D30A36"
                            img="./assets/img/blusa-header.png"
                            alt="Moletons"
                            textAreaBg="#FFFFFF"
                            title="Moletons"
                            titleColor={categoryTitleColor}
                            textButton={categoryTextButton}
                            link="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}