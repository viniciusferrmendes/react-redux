import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

export default props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/param/1">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/2">Param #02</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}