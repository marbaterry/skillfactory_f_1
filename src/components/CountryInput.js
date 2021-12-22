import React, {useState} from "react";
import "../styles/CountryInput.css"

function Form(props) {

    // const [value, setValue] = useState('');
    // console.log(value)

    return (
            <input className={"CountryInput"} {...props}/>
    );
}


export default Form;