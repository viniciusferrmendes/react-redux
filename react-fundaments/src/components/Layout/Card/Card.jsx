import React from "react";

import "./Card.css";

export default props => {

    const { title, children } = props;

    return (
        <div className="Card">
            <div className="Title">{title}</div>
            <div className="Content">{children}</div>
        </div>
    );
}
