import React from "react";

import If from "./If";

export default ({ user }) => {
    user = user || {};
    const { name } = user;
    return (
        <div>
            <If test={!user || !name}>
                Welcome, my friend!
            </If>
            <If test={user && name}>
                Welcome, <strong>{name}</strong>!
            </If>
        </div>
    );
}
