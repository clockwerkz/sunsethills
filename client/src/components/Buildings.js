import React from 'react';
import Building from './Building';


const Buildings = ({ list = [] }) => {
    let max = -1;
    return (
        <div>
            <h1>Buildings</h1>
            <div className="buildings">
                { list.length > 0 && list.map((height, index)=> {
                    let visibility = height > max ? true : false;
                    max = height > max ? height : max;
                    return <Building key={index} height={height} visibility={visibility}/>

                })}
            </div>
        </div>
    )
}

export default Buildings;