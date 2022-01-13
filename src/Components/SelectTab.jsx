import React from 'react'

const SelectTab = ({ m, monthChange }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[m];
    return (
        //btn btn-primary dropdown-toggle
        <select className="month-drop-list" onChange={(e) => monthChange(e.target.value)}>

            {
                months.map((months, i) =>
                    <option className="drop-opt"
                        value={i}
                        key={i}
                        //onClick={(eve) => { monthChange(eve.target.index); console.log(eve.target.index) }}
                        selected={month === months}
                    >{months}
                    </option>
                )
            }
        </select >
    )
}
export default SelectTab
