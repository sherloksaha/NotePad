import React from "react";
import { createContext,useReducer } from "react";
import AppReducer from './AppReducer';
const initialState = {
    transaction : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //Actions
    function  deletef(id){
        dispatch({
            type : 'DELETE',
            payload : id
        });
    }

    function AddData(transaction){
        dispatch({
            type : 'Add_Data',
            payload : transaction
        })
    }

    return (
    <GlobalContext.Provider value={{
        transaction : state.transaction,
        deletesdata : deletef,
        adddata : AddData
    }}>
        {children}
    </GlobalContext.Provider>
    );
}