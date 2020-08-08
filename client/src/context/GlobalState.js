import React, { useReducer, createContext} from 'react';
import AppReducer from './AppReducer';
//create the initial state
const initialState = {
    transactions: [
        {id:1, description:"Income", amount: 1000},
        {id:2, description:"Allowance", amount: 100},
        {id:3, description:"Rent", amount: 200}
    ]
}


// Create the global context

export const GlobalContext = createContext(initialState);

//create a provider for global context

export const GlobalProvider = ({children}) => {
    
 const [state, dispatch] = useReducer(AppReducer, initialState);

 // Actions for transactions
 function delTransaction(id){
    dispatch({type:"DELETE_TRANSACTION", payload:id});
 }function addTransaction(transaction){
     dispatch({type:"ADD_TRANSACTION", payload:transaction});
 }


    return(
    <GlobalContext.Provider value={{
        transactions:state.transactions, 
        delTransaction, 
        addTransaction
    }}>
        {children}  
    </GlobalContext.Provider>
    );
}
// All the components are wrapped in GlobalCfontext.Provider
// because {childern} prop refers to components in App Component.