import React from "react";


const InputFields = () => {

    return (
        <div>
            Input1<input id="id_1" value={null} onChange={(e) => Data1(e.target.value)} />
            Input2<input id="id_2" value={null} onChange={(e) => Data2((e.target.value))} />
        </div>
    )

}
const Data1 = (num) => {
    document.getElementById("id_1").value = num;
    document.getElementById("id_2").value = num + 1;
}

const Data2 = (num) => {
    document.getElementById("id_1").value = num - 1;
    document.getElementById("id_2").value = num;
}

export default InputFields