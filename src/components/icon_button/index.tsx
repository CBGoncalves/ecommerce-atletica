import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

type Props = {
    text: string;
    id: string;
}

export default function IconButton(props: Props) {
    return (
        <button id={props.id} className="button"><img src="./assets/icons/cart.svg" />{props.text}</button>
    );
}