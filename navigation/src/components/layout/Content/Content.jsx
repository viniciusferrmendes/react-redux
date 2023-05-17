import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../../views/examples/Home";
import About from "../../../views/examples/About";
import Param from "../../../views/examples/Param";

import "./Content.css";

export default props => {
    return (
        <main className="Content">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
            </Routes>
        </main>
    );
}