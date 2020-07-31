import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transactions.amount);
    // const total = amount.reduce((accumulator, currentValue) =>{
    //     return accumulator+=currentValue;
    // }, 0).toFixed(2);

    const income = amount.
    filter(item => item>0).
    reduce((accumulator, currenValue) => (accumulator+=currenValue), 0)
    .toFixed(2);

    const expense = (amount
    .filter(item => item<0)
    .reduce((accumulator, currentValue) => (accumulator+=currentValue), 0) * -1)
    .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus" id="money plus">+${income}</p>
            </div>
            <div>

            <h4>Expense</h4>
                <p className="money minus" id="money minus">-${expense}</p>
            </div>
        </div>
    )
}
