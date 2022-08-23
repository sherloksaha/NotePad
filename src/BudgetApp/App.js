import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import './App.css';
import IncomeExpan from "./IncomeExpan";
import Transaction from "./Transaction";
import AddTrans from "./AddTrans";
import {GlobalProider} from './Context/GlobalState';
function App(){
    return (
        <>
            <GlobalProider>
                <Header/>
                <div className="container">
                    <Balance/>
                    <IncomeExpan/>
                    <Transaction/>
                    <AddTrans/>
                </div>
            </GlobalProider>
        </>
    )
}
export default App