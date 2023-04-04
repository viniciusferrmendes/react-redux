import React from "react";
import ReactDOM from "react-dom";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";

import "./index.css";

ReactDOM.render(
    <div>
        <First />
        <WithParameter course="React/Redux" student="Vinicius" grade={4} />
    </div>,
    document.getElementById("root")
);
