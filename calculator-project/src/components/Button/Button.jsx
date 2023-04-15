import React from "react";

import "./Button.css";

export default ({ label, operation, double, triple, click }) => {

    let btnClasses = "button ";
    btnClasses += operation ? "operation " : "";
    btnClasses += double ? "double " : "";
    btnClasses += triple ? "triple " : "";

    return (
        <button
            className={btnClasses}
            onClick={() => click && click(label)}>
            {label}
        </button>
    );
}
