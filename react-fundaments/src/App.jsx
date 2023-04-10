import React from "react";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/Layout/Card/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsList from "./components/repetition/StudentsList";
import ProductsTable from "./components/repetition/ProductsTable";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import DirectFather from "./components/communication/DirectFather";
import IndirectFather from "./components/communication/IndirectFather";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";
import Mega from "./components/mega/Mega";

import "./App.css";

export default () => {
    return (
        <div className="App">
            <h1>React Fundaments</h1>

            <div className="Cards">
                <Card title="#13 - MEGA-SENA CHALLENGE" color="#773344">
                    <Mega quantity={6}/>
                </Card>
                <Card title="#12 - Counter" color="#E0E0E2">
                    <Counter initialValue={10} step={10} />
                </Card>
                <Card title="#11 - Controlled Component" color="#950952">
                    <Input />
                </Card>
                <Card title="#10 - Indirect Communication" color="#B5CBB7">
                    <IndirectFather />
                </Card>
                <Card title="#09 - Direct Communication" color="#FFE900">
                    <DirectFather />
                </Card>
                <Card title="#08 - Conditional Rendering" color="#846A6A">
                    <EvenOrOdd number={4} />
                    <UserInfo />
                    <UserInfo user={{ name: "Vinicius" }} />
                    <UserInfo user={{ name: "Pedro", email: "pedro@email.com" }} />
                </Card>
                <Card title="#07 - Products Table" color="#59656F">
                    <ProductsTable />
                </Card>
                <Card title="#06 - Repetition" color="#F4B886">
                    <StudentsList />
                </Card>
                <Card title="#05 - Component with chidrens" color="#08B2E3">
                    <Family surname="Mendes">
                        <FamilyMember name="Vinicius" />
                        <FamilyMember name="Joao Vitor" />
                        <FamilyMember name="Gilson" />
                        <FamilyMember name="Lira" />
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
