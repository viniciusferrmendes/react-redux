import React from "react";

import "./Menu.css";

export default props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}