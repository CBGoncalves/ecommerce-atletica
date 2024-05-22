import React from "react";
import Navbar from "../../components/navbar";

import "./style.css";

export default function HomeScreen() {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h1>Home Screen</h1>
            </div>
        </div>
    );
}