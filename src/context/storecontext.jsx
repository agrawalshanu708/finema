import { useContext, createContext,useReducer, useEffect} from "react";
import { storeReducer } from "../reducer/index";
import axios from "axios"
const StoreContext = createContext();
const StoreProvider = ({children}) => {
  
const[storeState,storeDispatch] = useReducer(storeReducer, {
    storeItems: [],
    modal: false
  
})


useEffect (() => {
    const fetchData = async () => {
const videoData = await axios.get("/api/videos")
   storeDispatch({type: "FETCH_DATA", payload: videoData.data.videos})
    }
    fetchData();
},[])


    return (
        <StoreContext.Provider value = {{storeState,storeDispatch}}>
            {children}
        </StoreContext.Provider>
    )
}
const useStore = () => useContext(StoreContext);

export {useStore,StoreProvider};