import React from "react";
import "./style.css"

type Props = {
    id: string;
    type: string;
    placeholder: string;
}

export default function Input(props: Props) {
    return (
        <input className="input"
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
        />
    );
}