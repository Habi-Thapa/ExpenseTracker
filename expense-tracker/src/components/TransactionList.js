import React, { useContext }  from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)
  return (
    <>
    <h3>History</h3>
    <ul id='list' className='list'>
        {transactions.map(transactions => (
        <li className={transactions.amount < 0 ? 'minus': 'plus'}>
        {transactions.text} <span>{transactions.amount}</span><button className='delete-btn'>x</button>
        </li> ))}
    </ul>
    </> 
  )
}
