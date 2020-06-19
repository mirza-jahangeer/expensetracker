import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div>
            <div>
                <h4>Income</h4>
                <p className="money-plus" id="money-plus">+$0.00</p>
            </div>
            <div>

            <h4>Expense</h4>
                <p className="money-minus" id="money-minus">-$0.00</p>
            </div>
        </div>
    )
}
