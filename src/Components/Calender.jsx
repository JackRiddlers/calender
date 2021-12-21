import React, { useState } from 'react'
import CalenderBox from './CalenderBox';
import SelectTab from './SelectTab';
import YearTab from './YearTab';
import ButtonsTab from './ButtonsTab';

const Calender = () => {
    const date = new Date();
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());
    const yearChange = (yearNow) => {
        let y = yearNow;
        setYear(y);
    }
    const monthChange = (monthNow) => {
        setMonth(monthNow);
    }
    const yInc = () => {
        let y = year + 1;
        setYear(y);
    }
    const yDec = () => {
        let y = year - 1;
        setYear(y);
    }
    const mInc = () => {
        if (month === 11) {
            let y = year + 1;
            setYear(y)
        }
        let m = (month + 1) % 12;
        setMonth(m)
    }
    const mDec = () => {
        if (month === 0) {
            setMonth(11);
            let y = year - 1;
            setYear(y)
        }
        else {
            let m = ((month - 1)) % 12;
            setMonth(m);
        }
    }

    return (
        <div className='main-container'>
            <div className='calender-container'>
                <div className="month-year-container" >
                    <SelectTab m={month} monthChange={monthChange} />
                    <YearTab y={year} Change={yearChange} />
                </div>
                <div className='river'></div>
                <CalenderBox y={year} m={month} d={date} />
                <ButtonsTab y={year} m={month} yInc={yInc} yDec={yDec} mDec={mDec} mInc={mInc} />
            </div>
        </div>
    )
}

export default Calender