import { useContext, createContext,useReducer } from "react";
import {historyReducer} from "./../reducer/index"
const HistoryContext = createContext();
const HistoryProvider = ({children}) => {
  const[historyState,historyDispatch] = useReducer(historyReducer,{
     historyItems: [] 
  })
 
    return (
        <HistoryContext.Provider value = {{historyState,historyDispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}
const useHistory = () => useContext(HistoryContext);

export {useHistory,HistoryProvider};