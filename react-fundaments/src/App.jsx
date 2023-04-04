import React from "react";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";

export default () => {
    return (
        <div id="app">
            <h1>React Fundaments</h1>
            <Random max={100} min={0} />
            <Fragment />
            <WithParameter course="React/Redux" student="Vinicius" grade={6.7} />
            <First />
        </div>
    );
}
