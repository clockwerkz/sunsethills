import React, { useState } from 'react';

const EntryForm = (props) => {
    
    const [ input, setInput ] = useState('');

    return (
        <div>
            <h1>Input: {input}</h1>
            <input type="text" value={input} onChange={(e)=>{ setInput(e.target.value) }} />
        </div>
    )
}

export default EntryForm;