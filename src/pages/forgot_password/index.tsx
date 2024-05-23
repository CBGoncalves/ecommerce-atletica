import React from "react";

import "./style.css";
import Input from "../../components/input";
import Button from "../../components/button";
import InlineButton from "../../components/inline_button";

export default function ForgotPassword() {

    return (
        <div className="forgot-password-form">
            <h1>Esqueci a Senha</h1>
            <p className="forgot-phase">Digite seu e-mail para recuperar sua senha</p>

            <Input id="forgot-input" type="text" placeholder="E-mail" />
            <div className="button-div">
                <Button id="forgot-button" link="/login" text="ENVIAR" />
            </div>
            <InlineButton id="inline-button" link="/login" text="Já possui conta? Fazer Login!" />
        </div>
    )
}