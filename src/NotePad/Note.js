import React from "react";

import { MdDeleteForever } from 'react-icons/md';
function Note({notes,date,id,deleteF}){
    const deleteIt=()=>{
        deleteF(id);
    }
    return(
        <>
            <div className='note' ids={id}>
                <span>{notes}</span>
                <div className='note-footer'>
                    <small>{date}</small>
                    <MdDeleteForever ids={id} className='delete-icon'
                    onClick={deleteIt}
                     size='1.3em'/>
                </div>
            </div>
        </>
    )
}
export default Note