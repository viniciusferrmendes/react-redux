import React from "react";

export default ({ callback }) => {
    const min = 50;
    const max = 70;
    const randomAge = () => (Math.random() * (max - min) + min).toFixed();
    const randomDev = () => Math.random() > 0.5;

    return (
        <div>
            <div>Son</div>
            <button onClick={() => callback("Gilson", randomAge(), randomDev())}>
                Provide Informations
            </button>
        </div>
    );
}
