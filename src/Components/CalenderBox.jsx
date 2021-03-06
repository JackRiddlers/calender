import React from 'react';
import { getDaysInMonth, getDay } from 'date-fns';
const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalenderBox = ({ y, m, d }) => {
    const daysInMonth = getDaysInMonth(new Date(y, m));
    const weekday = getDay(new Date(y, m, 1));
    const date = d.getDate();
    const days = [...Array(daysInMonth)].map(((_, index) => index + 1));

    for (let index = 0; index < weekday; index++) {
        days.unshift("");
    }

    for (let index = days.length; index < (6 * 7); index++) {
        days.push("-");
    }
    let rows = [];
    let cells = [];
    days.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows 
            cells = []; // empty container 
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === days.length - 1) {
            rows.push(cells);
        }
    });
    const month = d.getMonth();
    let year = d.getFullYear();
    let daysinmonth = rows.map((days, i) => {
        return (
            <tr>
                {days.map((desk, j) =>

                    <td onClick={console.log(5)} className={date === desk && y === year && m === month ? 'selected' : 'none'}><div>{desk}</div></td>
                )
                }
            </tr >
        )
    });
    return (
        < table >
            <thead>
                <tr className="weekday">
                    {
                        weekdays.map(days =>
                            <td>{days}</td>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {daysinmonth}
            </tbody>
        </ table>
    )

}
export default CalenderBox