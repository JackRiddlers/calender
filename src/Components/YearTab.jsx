import React, { useState } from "react";



const YearTab = ({ y, Change }) => {
    const [showYearInput, setShowYearInput] = useState(false);

    const newYear = (yearNow) => {
        setShowYearInput(false);
        Change(yearNow);
    }

    return (
        <span
            className="year-container"
            onDoubleClick={() =>
                setShowYearInput((prevState) => !prevState)
            }>
            {y}
            {
                showYearInput && <InputTab year={y} change={newYear} />
            }
        </span>

    )
}
const InputTab = ({ year, change }) => {
    const [yearNow, setYearInput] = useState(year)
    return (
        <div>
            <input onChange={(e) => setYearInput(e.target.value)} />
            <button onClick={() => change(yearNow)}>Submit</button>
        </div>
    )
}

export default YearTab