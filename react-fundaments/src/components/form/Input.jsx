import React, { useState } from "react";

import "./Input.css";

export default props => {

    const [value, setValue] = useState("Initial");

    const changeValue = e => {
        setValue(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <input value={value} onChange={changeValue} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    );
}
