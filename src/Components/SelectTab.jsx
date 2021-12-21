import React from 'react'

const SelectTab = ({ m, monthChange }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[m];
    return (
        //btn btn-primary dropdown-toggle
        <select className="month-drop-list">
            {
                months.map((months, i) =>
                    <option className="drop-opt"
                        onClick={(eve) => monthChange(eve.target.index)}
                        selected={month === months}>{months}
                    </option>
                )
            }
        </select>
    )
}
export default SelectTab
