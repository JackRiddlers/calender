import React, { useState } from "react";
import { getDaysInMonth, getDay, getWeeksInMonth } from 'date-fns';
import { weekdaysMin } from "moment";
const months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

const date = new Date();

const Calender = () => {
    return (
        < React.Fragment >
            <MonthYearContainer />
        </React.Fragment >
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
const CalenderTab = ({ year, month }) => {
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weeks = getWeeksInMonth(new Date(year, month));
    const daysInMonth = getDaysInMonth(new Date(year, month));
    const weekday = getDay(new Date(year, month, 1));
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    for (let index = 0; index < daysInMonth; index++) {
        const element = array[index];

    }
    return (
        <table >
            <tr>
                {
                    weekdays.map((day) => <th>{day}</th>)
                }
            </tr>
            {
                [...Array(weeks).
            }
        </table>
    )
}

const MonthYearContainer = () => {

    const [showYearInput, setShowYearInput] = useState(false);
    const [month, setMonth] = useState(months[date.getMonth()]);
    const [year, setYear] = useState(date.getFullYear());
    const newYear = (yearNow) => {
        setShowYearInput(false);
        setYear(yearNow);
    }

    return (
        <React.Fragment>
            <div className="month-year-container" >
                <select className="month-drop-list" >

                    {
                        months.map((months) =>
                            <option className="drop-opt"
                                onClick={(eve) => setMonth(eve.target.value)}
                                selected={month == months}>{months}</option>
                        )
                    }
                </select>
                <span className="year-container" onDoubleClick={() => setShowYearInput((prevState) => !prevState)}>{year}</span>
                {
                    showYearInput && <InputTab year={year} change={newYear} />
                }
            </div>
            <CalenderTab year={year} month={months.indexOf(month)} />
        </React.Fragment>
    )
}


export default Calender