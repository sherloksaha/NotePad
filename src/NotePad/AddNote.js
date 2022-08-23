import React, { useState } from "react";

function AddNote({UploadData}){

    const[notetext,setnoteText]=useState('');
    const charlimit=300;
    const handlecheck=(event)=>{
       let datas= event.target.value;
       if(charlimit-datas.length>=0){
        setnoteText(datas);
       }
       
    }
    const saveData=()=>{

        if(notetext.trim().length>0){
            UploadData(notetext);
            setnoteText('');
        }
    }
    return(
        <>
          <div className='note new'>
            <textarea rows='8' cols='10'
            placeholder="Type something..."
            value={notetext}
            onChange={handlecheck}>
            </textarea>
            

            
            <div className="note-footer">
                <small>{charlimit-notetext.length} characters remaining</small>
                <button className='save' onClick={saveData}>Save</button>
            </div>
          </div> 
        </>
    )
}
export default AddNote