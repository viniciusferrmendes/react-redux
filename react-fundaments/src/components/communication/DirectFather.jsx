import React from "react";
import DirectSon from "./DirectSon";

export default props => {
    return (
        <div>
            <DirectSon name={"Joao Vitor"} age={23} dev={false} />
            <DirectSon name={"Vinicius"} age={20} dev={true} />
        </div>
    );
}
