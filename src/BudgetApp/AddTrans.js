import React, { useContext, useState } from 'react'
import { GlobalContext } from './Context/GlobalState';
const AddTrans = () => {
    const [text,setText]= useState('');
    const[amount , setAmount]=useState(0);
    const {adddata} = useContext(GlobalContext);
   
    function submitd(e){
    e.preventDefault();
    const newTrans= {
      id:Date.now(),
      text,
      amount: +amount
    }
    adddata(newTrans);
    }
  return (
    <>
    <h2>Add New Transactions:</h2>
      <form onSubmit={submitd}> 
        <div className='form-control'>
            <label htmlFor='text'>Spend on:</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id='text' placeholder="Enter text.."/>
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>
                Amount<br/>
                (negative - expance, positive - income):
            </label>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} id="amount" placeholder="Enter"></input>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTrans
