import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const {delTransaction} = useContext(GlobalContext)
    const sign = transaction.amount > 0 ? '+': '-';
    const transactionType = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <li className={transactionType}>
            {transaction.description}
             <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => delTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    );
}
