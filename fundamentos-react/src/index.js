import React from "react";
import ReactDOM from "react-dom";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";

import "./index.css";

ReactDOM.render(
    <div id="app">
        <First />
        <WithParameter course="React/Redux" student="Vinicius" grade={6.7} />
        <Fragment />
    </div>,
    document.getElementById("root")
);
