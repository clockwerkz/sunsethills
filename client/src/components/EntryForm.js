import React, { useState, useEffect } from 'react';

const EntryForm = ({ setList, setFormActive }) => {
    
    const [ input, setInput ] = useState('');

    useEffect(()=>{
        const arr = input.match(/-?\d+/g); 
        if (arr) {
            const calculateVals = arr.slice(0,15).map(el => {
                let num = parseInt(el);
                return num < 1 ? 1 : num > 15 ? 15 : num;
            });
            setList(calculateVals);
        }
    }, [input])

    return (
        <div>
            <h1>Input: {input}</h1>
            <input type="text" value={input} onChange={(e)=>{ setInput(e.target.value) }} />
            <button onClick={()=> setFormActive(false)}>Done!</button>
        </div>
    )
}

export default EntryForm;