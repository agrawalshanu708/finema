import { useContext, createContext,useReducer } from "react";
import {watchLaterReducer} from "./../reducer/index"

const WatchLaterContext = createContext();
const WatchLaterProvider = ({children}) => {
  const[watchLaterState,watchLaterDispatch] = useReducer(watchLaterReducer,{
      watchLaterItems:[]
  })
  
    return (
        <WatchLaterContext.Provider value = {{watchLaterState,watchLaterDispatch}}>
            {children}
        </WatchLaterContext.Provider>
    )
}
const useWatchLater = () => useContext(WatchLaterContext);

export {useWatchLater,WatchLaterProvider};