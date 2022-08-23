import React from "react"
import Note from "./Note";
import AddNote from "./AddNote";
function NoteList({notes,UploadData,deleteF}){
    return(
        <>
        <div className='notes-list'>
            {
                notes.map((note)=><Note id={note.id}  
                deleteF={deleteF}
                notes={note.text} date={note.dates}/>)
            }
        </div>
        <AddNote UploadData={UploadData}/>
        </>
    )
}
export default NoteList