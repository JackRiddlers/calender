import React from "react";

const ButtonsTab = ({ y, m, yDec, mDec, mInc, yInc }) => {
    return (
        //btn btn-primary
        <div className='buttons-container'>
            <div className='prev-year btn btn-primary' onClick={yDec}>{"<<"}</div>
            <div className='prev-month  btn btn-primary' onClick={mDec}>{"<"}</div>
            <div className='next-month  btn btn-primary' onClick={mInc}>{">"}</div>
            <div className='next-year  btn btn-primary' onClick={yInc}>{">>"}</div>
        </div >

    )
}
export default ButtonsTab