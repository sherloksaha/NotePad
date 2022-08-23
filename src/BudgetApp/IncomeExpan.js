import React, { useContext } from 'react'
import { GlobalContext } from './Context/GlobalState';
const IncomeExpan = () => {
  const {transaction} = useContext(GlobalContext);
  const amou= transaction.map((transaction)=>transaction.amount);
  const positive=amou.filter((ele)=>ele>0);
  const possum=positive.reduce((curr,item)=>(curr+=item),0);
  const neg=amou.filter((ele)=>ele<0);
  const negsum=neg.reduce((curr,item)=>(curr+=item),0);
  return (
    <div className='inc-exp-container'>
    <div>
    <h4>Income</h4>
      <p  className='money plus'> Rs. {possum}</p>
    </div>
    <div>
    <h4>Expanse</h4>
      <p className='money minus'> Rs. {negsum}</p>
    </div>
    </div>
  )
}

export default IncomeExpan
