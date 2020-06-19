import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h2>History</h2>
            <ul id="list" class="list">
                <li class="minus">
                    Cash <span>$400</span><button class="delete-button">x</button>
                </li>
            </ul>
        </div>
    )
}
