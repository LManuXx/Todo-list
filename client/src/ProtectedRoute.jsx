import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const {loading, isAuth} = useAuth();

    if(loading){
        return <h1>loading</h1>
    }

    if (!loading && !isAuth) {
        return <Navigate to='/login' replace />; // Agrega 'return' aquí
    }

    return <Outlet />;
};
