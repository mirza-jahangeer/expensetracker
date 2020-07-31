import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount > 0 ? '+': '-';
    const transactionType = transaction.amount > 0 ? 'plus' : 'minus';
    return (
        <li className={transactionType}>
            {transaction.text}
             <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    );
}
