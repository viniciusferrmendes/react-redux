import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../../views/examples/Home";
import About from "../../../views/examples/About";

import "./Content.css";

export default props => {
    return (
        <main className="Content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
}