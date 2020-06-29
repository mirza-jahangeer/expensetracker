import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="plus">
            {Transaction.text}
    <span>{Transaction.amount}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
