import React from "react";

import IndirectSon from "./IndirectSon";

export default props => {

    function provideInfos(name, age, dev) {
        console.log(name, age, dev);
    }

    return (
        <div>
            <div>Pai</div>
            <IndirectSon callback={provideInfos} />
        </div>
    );
}
