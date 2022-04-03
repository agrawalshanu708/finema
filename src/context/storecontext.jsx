import { useContext, createContext,useReducer } from "react";

const StoreContext = createContext();
const StoreProvider = ({children}) => {
  

    return (
        <StoreContext.Provider value = {{}}>
            {children}
        </StoreContext.Provider>
    )
}
const useStore = () => useContext(StoreContext);

export {useStore,StoreProvider};