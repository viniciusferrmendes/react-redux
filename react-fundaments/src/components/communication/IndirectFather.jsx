import React, { useState } from "react";

import IndirectSon from "./IndirectSon";

export default props => {
    const [name, setName] = useState("?");
    const [age, setAge] = useState(0);
    const [dev, setDev] = useState(false);

    function provideInfos(name, age, dev) {
        setName(name);
        setAge(age);
        setDev(dev);
    }

    return (
        <div>
            <span>{name} </span>
            <span><strong>{age}</strong> </span>
            <span>{dev ? "TRUE" : "FALSE"}</span>
            <IndirectSon callback={provideInfos} />
        </div>
    );
}
