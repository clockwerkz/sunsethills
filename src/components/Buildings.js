import React from 'react';
import Building from './Building';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPlus } from '@fortawesome/free-solid-svg-icons'


const Buildings = ({ list = [], updateBldg, formActive, addBldg, deleteBldg }) => {
    let max = -1;
    return (
        <div>
            <div className="buildings__wrapper">
                {!formActive && <button className="btn--add-bldg" onClick={()=>addBldg(true)}><FontAwesomeIcon icon={faBuilding} /></button>}
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
                            deleteBldg={deleteBldg}
                        />

                    })}
                </div>
                {!formActive && <button className="btn--add-bldg" onClick={()=>addBldg(false)}><FontAwesomeIcon icon={faBuilding} /></button>}
            </div>
        </div>
    )
}

export default Buildings;