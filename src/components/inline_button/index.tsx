import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

type Props = {
    id: string;
    text: string;
    link: string;
}

export default function InlineButton(props: Props) {
    return (
        <a id={props.id}><Link to={props.link} className="inlineButton">{props.text}</Link></a>
    );
}