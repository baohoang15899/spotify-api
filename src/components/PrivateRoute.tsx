import { IprivateRoute } from "Interface/Interfaces";
import {
    Navigate,
    useLocation
} from "react-router-dom";


export const PrivateRoute = ({ children, auth }: IprivateRoute) => {
    const location = useLocation()
    return auth ? children : <Navigate to="/" state={{ location }} />
}