import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import Input from "../../components/input";
import Button from "../../components/button";
import InlineButton from "../../components/inline_button";

export default function Login() {

    return (
        <div className="login">
            <div className="loginHeader">
                <div className="loginText">
                    <h1>Login</h1>
                    <p>Bem-Vindo, faça login</p>
                    <p>ou cadastre-se</p>
                </div>
                <div>
                    <img className="logo-login" src="./assets/img/logo.png" alt="Logo" />
                </div>
            </div>

            <div className="formLogin">
                <Input id="input-email" type="text" placeholder="Email" />
                <Input id="input-senha" type="password" placeholder="Senha" />
                <InlineButton id="inline-esqueci-senha" link="/forgot-password" text="Esqueci a Senha" />
                <Button id="login-button" link="/" text="ENTRAR" />
                <InlineButton id="inline-cadastro" link="/register" text="Não possui conta? Cadastre-se" />
            </div>

        </div>
    )
}