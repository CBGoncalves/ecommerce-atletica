import React from "react";

import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";
import InlineButton from "../../components/inline_button";

export default function Register() {

    return (
        <div className="register-form">
            <div className="register-header">
                <h1>Cadastre-se</h1>
                <p>Crie sua conta para acessar nossa plataforma</p>
            </div>
            <div className="register-inputs">
                <Input id="name-input" type="text" placeholder="Nome" />
                <Input id="surname-input" type="text" placeholder="Sobrenome" />
                <Input id="email-input" type="email" placeholder="E-mail" />
                <Input id="password-input" type="password" placeholder="Senha" />
                <Input id="confirm-pass-input" type="password" placeholder="Confirmar Senha" />
            </div>
            <div className="register-buttons">
                <Button id="register-button" link="/" text="CADASTRAR" />
                <InlineButton id="inline-register" link="/login" text="Já possui cadastro? Fazer login!" />
            </div>
        </div>
    )
}