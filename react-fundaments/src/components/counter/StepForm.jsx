import React from "react";

export default ({ step, setStep }) => {
    return (
        <div>
            <label htmlFor="stepInput">Step: </label>
            <input id="stepInput" type="number" value={step} onChange={e => setStep(+e.target.value)} />
        </div>
    );
}
