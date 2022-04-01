import { useContext, createContext,useReducer } from "react";

const HistoryContext = createContext();
const HistoryProvider = ({children}) => {
  
 
    return (
        <HistoryContext.Provider value = {{}}>
            {children}
        </HistoryContext.Provider>
    )
}
const useHistory = () => useContext(HistoryContext);

export {useHistory,HistoryProvider};