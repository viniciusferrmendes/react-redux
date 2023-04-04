import React from "react";

export default props => {
    let { max, min } = props;
    if (min > max) [min, max] = [max, min];

    const randomNumber = (Math.random() * (max - min) + min).toFixed();

    return (
        <div>
            <h2>Random number</h2>
            <p>Max: {max}</p>
            <p>Min: {min}</p>
            <p>Result: {randomNumber}</p>
        </div>
    );
}
