import { useContext, createContext, useReducer } from "react";
const FilterContext = createContext();
const FilterProvider = ({ children }) => {
  return <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>;
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
