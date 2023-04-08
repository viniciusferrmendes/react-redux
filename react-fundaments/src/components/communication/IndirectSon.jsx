import React from "react";

export default ({ callback }) => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => callback("Gilson", 58, false)}>
                Provide Informations
            </button>
        </div>
    );
}
