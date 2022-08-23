import React from "react";
import { MdSearch } from "react-icons/md";

function SearchBar({handelsearch}){
    return(
        <>
            <div className="search">
                <br/>
                <MdSearch className="search-icons" size='1.3em'/>
                <input type="text" 
                onChange={(event)=>
                handelsearch(event.target.value)}
                placeholder="Search for the note"
                />
            </div>
        </>
    )
}
export default SearchBar;