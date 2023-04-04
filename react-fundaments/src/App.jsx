import React from "react";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";

export default _ =>
    <div id="app">
        <h1>React Fundaments</h1>
        <Fragment />
        <WithParameter course="React/Redux" student="Vinicius" grade={6.7} />
        <First />
    </div>
