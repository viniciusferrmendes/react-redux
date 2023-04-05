import React from "react";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/Layout/Card/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

import "./App.css";

export default () => {
    return (
        <div className="App">
            <h1>React Fundaments</h1>

            <div className="Cards">
                <Card title="#05 - Component with chidrens" color="#08B2E3">
                    <Family surname="Mendes">
                        <FamilyMember name="Vinicius" />
                        <FamilyMember name="Joao Vitor" />
                        <FamilyMember name="Gilson" />
                    </Family>
                </Card>
                <Card title="#04 - Random Challenge" color="#C2492F">
                    <Random max={100} min={0} />
                </Card>

                <Card title="#03 - Fragment" color="#3FC22F">
                    <Fragment />
                </Card>

                <Card title="#02 - With Parameter" color="#1572B2">
                    <WithParameter course="React/Redux" student="Vinicius" grade={6.7} />
                </Card>

                <Card title="#01 - First" color="#8215B2">
                    <First />
                </Card>
            </div>
        </div>
    );
}
