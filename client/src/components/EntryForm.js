import React, { useState, useEffect } from 'react';

const EntryForm = ({ setList, setFormActive }) => {
    
    const [ input, setInput ] = useState('');

    useEffect(()=>{
        const arr = input.match(/-?\d+/g); 
        if (arr) {
            const calculateVals = arr.slice(0,20).map(el => {
                let num = parseInt(el);
                return num < 1 ? 1 : num > 15 ? 15 : num;
            });
            setList(calculateVals);
        }
    }, [input])

    return (
        <div className="form">
            <p className="form__instructions">Which buildings will get to see today's beautiful sunset? Please enter the building heights below, separated by comma, space, or whatever you'd like to use! <br />Press Done when you've ready!</p>
            <div className="form-control">
            <input type="text" className="form__input" value={input} onChange={(e)=>{ setInput(e.target.value) }} placeholder="Enter building heights here"/>
                <button className="btn--done" onClick={()=> setFormActive(false)}>Done!</button>
            </div>
            <p className="form__hint">Enter up to 20 buildings, with a height value from 1 to 15.</p>
        </div>
    )
}

export default EntryForm;