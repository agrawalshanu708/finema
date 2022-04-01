import { useContext, createContext,useReducer } from "react";

const WatchLaterContext = createContext();
const WatchLaterProvider = ({children}) => {
  
  
    return (
        <WatchLaterContext.Provider value = {{}}>
            {children}
        </WatchLaterContext.Provider>
    )
}
const useWatchLater = () => useContext(WatchLaterContext);

export {useWatchLater,WatchLaterProvider};