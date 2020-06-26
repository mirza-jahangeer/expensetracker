import React, {useContext} from 'react'
import {GlobalState} from '../context/GlobalState';
import {Transaction} from './Transaction';


export const TransactionList = () => {
     
    const {transactions} = useContext(GlobalState);
    return (
        <div>
            <h2>History</h2>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>$400</span><button class="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}
