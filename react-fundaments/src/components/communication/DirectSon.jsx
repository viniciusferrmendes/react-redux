import React from "react";

export default ({ name, age, dev }) => {
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{dev ? "TRUE" : "FALSE"}!</div>
        </div>
    );
}
