import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';
const Transaction2 = (props) => {
  const {deletesdata} = useContext(GlobalContext)
    const sign = props.transaction.amount<0?'-':'+';
  return (
   <li className={props.transaction.amount<0?'minus':'plus'}>
    {props.transaction.text}<span>{sign}  Rs. {Math.abs(props.transaction.amount)}/-</span>
    <button onClick={()=>deletesdata(props.transaction.id)} className='delete-btn'>x</button>
   </li>
  )
}

export default Transaction2
