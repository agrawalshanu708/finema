import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

const RequireAuth = ({children}) => {

    const{auth} = useAuth();
    return auth.isAuth ? children : <Navigate to = "/login" replace/>

}
export {RequireAuth} 