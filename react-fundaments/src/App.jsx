import React from "react";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/Layout/Card/Card";

export default () => {
    return (
        <div id="app">
            <h1>React Fundaments</h1>

            <Card title="#04 - Random Challenge">
                <Random max={100} min={0} />
            </Card>

            <Card title="#03 - Fragment">
                <Fragment />
            </Card>

            <Card title="#02 - With Parameter">
                <WithParameter course="React/Redux" student="Vinicius" grade={6.7} />
            </Card>

            <Card title="#01 - First">
                <First />
            </Card>
        </div>
    );
}
