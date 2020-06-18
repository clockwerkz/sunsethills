import React from 'react';


const Building = ({ height, visibility }) => {
    height = height * 25;
    let bgColor = visibility ? 'dodgerblue' : '#333';
    let style = {
        height : `${height}px`,
        backgroundColor: bgColor
    }
    return (
        <div>
            <div className="building" style={style}></div>
        </div>
    )
}

export default Building;