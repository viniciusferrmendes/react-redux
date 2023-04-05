import React, { cloneElement } from "react";

export default props => {

    const { children } = props;

    return (
        <div>
            {React.Children.map(children, (child, i) => {
                return cloneElement(child, { ...props, key: i });
            })}
        </div>
    );
}
