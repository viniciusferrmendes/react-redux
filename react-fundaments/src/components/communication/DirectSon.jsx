import React from "react";

export default ({ name, age, dev }) => {
    return (
        <div>
            <div>{name} - {age} - {dev ? "TRUE" : "FALSE"}!</div>
        </div>
    );
}
