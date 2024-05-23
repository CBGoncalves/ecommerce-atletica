import React from "react";
import Navbar from "../../components/navbar";

import "./style.css";

export default function About() {

    return (
        <div className="about-page">
            <Navbar />
            <div className="body">
                <div className="box">
                    <img className="about-image" src="./assets/img/logo.png" alt="logo" />
                    <div className="aboutHeader">
                        <div className="aboutTitle">
                            <h1>SOBRE NÓS</h1>
                        </div>
                        <div className="aboutText">
                            <p>A UniPaulistana Panthers é uma equipe poliesportiva que representa o Centro Universitário Paulistano desde 2024.
                                <br />
                                <br />
                                Nós surgimos no segundo semestre de 2024 com a ideia de três alunos do curso de Análise e desenvolvimento de sistemas e um de Psicologia, e então com o apoio da diretoria da universidade surgiu a UniPaulistana Panthers.
                                <br />
                                <br />
                                Dispomos de times de Basquetebol, Futsal e Vôlei, aqui na loja você pode aquirir desde camisas para torcer pelo time até adesivos para customizar o que quiser.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}