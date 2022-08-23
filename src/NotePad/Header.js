import React from "react";
function Header({handleDark}){
    return(
        <>
            <div className="header">
                <h1>Your NotePad</h1>
                <button onClick={()=>handleDark((prevStat)=>
                !prevStat
                )} className="save">Toggle</button>
            </div>
        </>
    )
}
export default Header