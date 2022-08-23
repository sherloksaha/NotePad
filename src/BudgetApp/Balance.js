import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';
const Balance = () => {
    const {transaction} = useContext(GlobalContext);
    const amounts=transaction.map((transaction)=>transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc=Number(acc)+Number(item)),0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">Rs. {Number(total)}</h1>
    </div>
  )
}

export default Balance
