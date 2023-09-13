import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    /*
    La condition allowedRole?.includes(auth?.role) 
    vérifie si le rôle de l'utilisateur (auth?.role) 
    est inclus dans le tableau des rôles autorisés 
    */
    return allowedRoles?.includes(auth?.role) ? (
        <Outlet />
    ) : auth?.email ? (
        <Navigate to="/unauthorized" state={{ from: location }} />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
