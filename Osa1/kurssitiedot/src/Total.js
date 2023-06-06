import React from "react";

const Total = ({ parts }) => {
    const totalExcercises = parts.reduce((sum, part) => sum + part.excercises, 0);
    return (
        <div>
            <p>Total excercises: {totalExcercises}</p>
        </div>
    )
}

export default Total;