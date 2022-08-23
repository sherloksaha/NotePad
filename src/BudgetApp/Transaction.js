import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';
import Transaction2 from './Transaction2';
const Transaction = () => {
   const {transaction}= useContext(GlobalContext);
  return (
    <div>
        <h3>History</h3>
        <ul className='list'>
        {
            transaction.map((transactionk)=>(
                <Transaction2 key={transactionk.id} transaction={transactionk}     
                />))
        }
        </ul>
    </div>
  )
}

export default Transaction
