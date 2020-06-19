import React from 'react';
import Building from './Building';


const Buildings = ({ list = [], updateBldg, formActive, addBldg }) => {
    let max = -1;
    return (
        <div>
            <h1>Buildings</h1>
            <div className="buildings__wrapper">
                {!formActive && <button onClick={()=>addBldg(true)}>{"<"}</button>}
                <div className="buildings">
                    { list.length > 0 && list.map((height, index)=> {
                        let visibility = height > max ? true : false;
                        max = height > max ? height : max;
                        return <Building 
                            key={index} 
                            height={height} 
                            visibility={visibility} 
                            index={index}
                            updateBldg={updateBldg}
                            formActive={formActive}
                        />

                    })}
                </div>
                {!formActive && <button onClick={()=>addBldg(false)}>{">"}</button>}
            </div>
        </div>
    )
}

export default Buildings;