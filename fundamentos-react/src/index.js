import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const tag = <strong>Hello World</strong>;

ReactDOM.render(
    <div>
        {tag}
    </div>,
    document.getElementById("root")
);
