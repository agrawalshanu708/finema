import { useContext, createContext, useReducer } from "react";
import { likeReducer } from "./../reducer/index";

const LikeContext = createContext();
const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    likeItems: [],
  });
  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};
const useLike = () => useContext(LikeContext);

export { useLike, LikeProvider };
