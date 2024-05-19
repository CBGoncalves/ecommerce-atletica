import React from "react";
import "./style.css"

type Props = {
    text: string;
    id: string;
}

export default function Button(props: Props) {
    return (
        <button id={props.id} className="button">{props.text}</button>
    );
}