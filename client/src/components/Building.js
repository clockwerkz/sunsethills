import React from 'react';


const Building = ({ height, visibility, index, formActive, updateBldg }) => {
    let visHeight = height * 25;
    let bgColor = visibility ? 'dodgerblue' : '#333';
    let style = {
        height : `${visHeight}px`,
        backgroundColor: bgColor
    }

    const submitBldgUpdate = (val) => {
        if ((val === -1 && height > 1) || (val === 1 && height < 15)) updateBldg(index, val);
    }
    return (
        <div>
            {!formActive && <button onClick={()=> submitBldgUpdate(1)}>+</button>}
            <div className="building" style={style}></div>
            {!formActive && <button onClick={()=> submitBldgUpdate(-1)}>-</button>}
        </div>
    )
}

export default Building;