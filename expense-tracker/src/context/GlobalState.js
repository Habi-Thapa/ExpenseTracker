import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text:'Book', amount: -10}
    ]
}

//create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
    <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
            }}>
        {children}
    </GlobalContext.Provider>
    )
}