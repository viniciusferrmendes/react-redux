import React, { useState } from "react";

import "./Mega.css";

export default props => {

    const [quantity, setQuantity] = useState(props.quantity);
    const initialNumbers = getNumbers(quantity);
    const [numbers, setNumbers] = useState(initialNumbers);

    function generateNumbers(array) {
        const MIN = 1;
        const MAX = 61;

        const randomNumber = parseInt(Math.random() * (MAX - MIN) + MIN);

        return array.includes(randomNumber) ? generateNumbers(array) : randomNumber;
    }

    function getNumbers(quantity) {
        const resultArray = [];

        for (let index = 0; index < quantity; index++) {
            resultArray.push(generateNumbers(resultArray))
        }

        return resultArray.sort((a, b) => a - b);
    }

    return (
        <div className="Mega">
            <h2>MEGA-SENA</h2>
            <h3>{numbers.join(" - ")}</h3>

            <div>
                <label>Numbers Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    min={1}
                    max={60}
                    onChange={e => setQuantity(+ e.target.value)}
                />
            </div>

            <button onClick={() => setNumbers(getNumbers(quantity))}>
                Generate Numbers
            </button>
        </div>
    );
}
