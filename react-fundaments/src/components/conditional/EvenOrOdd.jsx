import React from "react";

export default ({ number }) => {
    const isEven = number % 2 === 0;

    return (
        <div>
            {isEven ?
                <span>Even</span> :
                <span>Odd</span>
            }
        </div>
    );
}
