import React from "react";

export default ({ setIncrement, setDecrement }) => {

    return (
        <div>
            <button onClick={setIncrement}>+</button>
            <button onClick={setDecrement}>-</button>
        </div>
    );
}
