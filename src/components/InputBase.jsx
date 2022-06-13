import React from 'react';

/*Desestruturação de objetos: 
Ao invés de utilizar props.label */
const InputBase = ({label, ...props}) => {

    <>
        <input type="number"  {...props}/>
        <span>{label}</span>
    </>
}

export default InputBase