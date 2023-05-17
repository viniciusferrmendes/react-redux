import React from "react";
import { BrowserRouter } from "react-router-dom";

import Menu from "../components/layout/Menu/Menu";
import Content from "../components/layout/Content/Content";

import "./App.css";

export default props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    );
}