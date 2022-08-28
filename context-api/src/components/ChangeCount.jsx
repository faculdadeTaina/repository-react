//alterando o context

import React from 'react';

import { useContext } from "react";
import { CountContext } from '../context/CountContext';

const ChangeCount = () => {
    //os dados chegam em objeto
    const {counter, setCounter} = useContext(CountContext);

    return (
        <>
           
            <button onClick={() => setCounter(counter + 1)}>
                Add value ao counter
            </button>
        </>
    )
}

export default ChangeCount;