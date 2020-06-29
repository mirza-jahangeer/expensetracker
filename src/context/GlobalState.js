import React, {useContext, useReducer, createContext} from 'react';
import AppReducer from './AppReducer';
//create the initial state
const intialState = {
    transactions: [
        {id:1, description:"Income", amount: 1000},
        {id:2, description:"Allowance", amount: 100},
        {id:3, description:"Rent", amount: 200}
    ]
};
// Create the global context

export const GlobalContext = createContext(intialState);

//create a provider for global context

const GlobalProvider = ({childern}) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState, init);

    <GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {childern}
    </GlobalContext.Provider>
}