import React, { useState } from "react";

const Component2 = (props) => {
    const [ value, setValue] = useState(0);
    const handlePlus = () =>{
        setValue(value + 1)
    }
    const handleMinus =()=>{
        if(value > 0){
            setValue(value - 1)
        }
    }
    return(
        <div>
            <h1>Hallo {props.nama}</h1>
            <p>Komponen dibuat dengan functionalComponent</p>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export default Component2;