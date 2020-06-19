import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Building = ({ height, visibility, index, formActive, updateBldg,deleteBldg }) => {
    let visHeight = height * 25;
    let visGradient = 'linear-gradient(90deg, rgba(247,209,134,1) 0%, rgba(195,122,0,1) 100%)';
    let darkGradient = 'linear-gradient(90deg, rgba(106,73,154,1) 0%, rgba(22,0,98,1) 100%)';
    let bgColor = visibility ? visGradient : darkGradient;
    let style = {
        height : `${visHeight}px`,
        background: bgColor
    }

    const submitBldgUpdate = (val) => {
        if ((val === -1 && height > 1) || (val === 1 && height < 15)) updateBldg(index, val);
    }
    return (
        <div>
            {!formActive && <button className="btn--add" onClick={()=> submitBldgUpdate(1)}><FontAwesomeIcon icon={faPlus} /></button>}
            <div className={formActive ? "building" : "building building--set"} style={style}>
                {!formActive && <div className="building-hover">
                        <FontAwesomeIcon icon={faTrash} onClick={()=>{if (!formActive) deleteBldg(index)}} className="btn--trash"/>
                    </div>}
            </div>
            {!formActive && <button className="btn--sub" onClick={()=> submitBldgUpdate(-1)}><FontAwesomeIcon icon={faMinus} /></button>}
        </div>
    )
}

export default Building;