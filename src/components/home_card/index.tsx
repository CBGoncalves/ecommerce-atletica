import React from "react";

import "./style.css";
import Button from "../button";

type Props = {
    imgAreaBg: string;
    img: string;
    alt: string;
    textAreaBg: string;
    title: string;
    titleColor: string;
    textButton: string;
    link: string;
}

export default function HomeCard(props: Props) {
    return (
        <div className="card-product">
            <div className="img-area" style={{ backgroundColor: props.imgAreaBg }}>
                <img className="img-product" src={props.img} alt={props.alt} />
            </div>
            <div className="text-area" style={{ backgroundColor: props.textAreaBg }}>
                <h3 className="title-text" style={{ color: props.titleColor }}>{props.title}</h3>
                <Button id="text-area-button" text={props.textButton} link={props.link}></Button>
            </div>
        </div>
    );
}