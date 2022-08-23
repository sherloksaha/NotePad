import React, { useEffect, useState } from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

function App() {
    
    const [notes,setNotes] = useState([{
        text: "This is a by default..",
        dates: new Date().toLocaleTimeString(),
        id: Date.now()
    }]);
    const [searchtxt,setsrchtxt]= useState('');
    const[darkMode,setDarkMode] = useState(false);
    
    useEffect(()=>{
        const saveNote=JSON.parse(
            localStorage.getItem('react-app-data-fil')
        );
        if(saveNote){
            setNotes(saveNote);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem('react-app-data-fil',JSON.stringify(notes));
    },[notes])
   
    function UploadData(ele){
        const date=new Date();
        const newNotes={
            text : ele,
            dates: date.toLocaleTimeString(),
            id: Date.now()
        }
        const newNote=[...notes,newNotes];
        setNotes(newNote);
    }

    function deleteF(idk){
        
        let p=[];
        const newNotes= notes.filter(note=>note.id===idk);
        notes.map((ele)=>{
            if(ele.id!==newNotes[0].id){
                p.push(ele);
            }
        })
        setNotes(p);  
    }
  
    return (
    <>
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
        <Header handleDark={setDarkMode}/>
        <SearchBar handelsearch={setsrchtxt}/>
        
        <NoteList 
            notes={notes.filter((ele)=>ele.text.toLowerCase().includes(searchtxt))}
            UploadData={UploadData}
            deleteF={deleteF}/>
    </div>
    </div> 
    </>
  );
}

export default App