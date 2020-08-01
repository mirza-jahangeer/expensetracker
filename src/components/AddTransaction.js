import React, {useContext} from 'react';
import {GlobalContext }from '../context/GlobalState';

export const AddTransaction = () => {

    let [text, setText] = React.useState('');
    let [amount, setAmount] = React.useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">
                        Text
                    </label>
                    <input type="text" value={text} onChange = {(e) =>{setText(e.target.value) }} placeholder="Enter Description"> 
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                    Amount
                    </label>
                    <input type="number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter Amount">
                    </input>
                </div>
                <button className="btn">Add Transacrion</button>
            </form>
        </div>
    )
}
