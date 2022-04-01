import { useContext, createContext } from "react";

const LikeContext = createContext();
const LikeProvider = ({children}) => {
    return (
        <LikeContext.Provider value = {{value: 8}}>
            {children}
        </LikeContext.Provider>
    )
}
const useLike = () => useContext(LikeContext);

export {useLike,LikeProvider};