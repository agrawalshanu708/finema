import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducer/index";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
    const[filterState,filterDispatch] = useReducer(filterReducer,{
     filterBy: null
    })
  return <FilterContext.Provider value={{filterState,filterDispatch}}>
      {children}
      </FilterContext.Provider>;
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
