import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

type Props = {
    link: string;
    text: string;
    id: string;
}

export default function Button(props: Props) {
    return (
        <button id={props.id} className="button"><Link className="text-button" to={props.link}>{props.text}</Link></button>
    );
}