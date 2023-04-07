import React from "react";

import students from "../../data/students";

export default props => {
    const listItems = students.map(student => {
        const { id, name, grade } = student;
        return <li key={id}>{id}) {name} -&gt; {grade}</li>
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {listItems}
            </ul>
        </div>
    );
}