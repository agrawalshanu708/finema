import { useContext, createContext,useState } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
const [auth,setAuth] = useState({
    token : "",
    isAUth: false
})
  return <AuthContext.Provider value={{auth,setAuth}}>
      {children}
      </AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
