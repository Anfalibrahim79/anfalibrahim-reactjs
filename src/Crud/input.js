import React, { useState } from "react";

const MyInput = () => {
    const[input, setInput]= useState('')
    const handleChange = (e) => {
        console.log(e);
        setInput(e.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="Type here" value={input} onChange= {handleChange}></input>
        </div>
    )
}

export default MyInput