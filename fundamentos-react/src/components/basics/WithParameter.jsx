import React from "react";

export default function WithParameter(props) {
    const { course, student, grade } = props;
    const newGrade = Math.ceil(grade); // PROPS IS READ-ONLY
    const status = newGrade >= 7 ? "Approved" : "Disapproved";

    return (
        <div>
            <h2>Course: {course}</h2>
            <h3>Student: {student}</h3>
            <h3>Grade: {newGrade}</h3>
            <h3>Status: {status}</h3>
        </div>
    );
}
