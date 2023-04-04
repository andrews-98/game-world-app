import { Navigate, Outlet } from "react-router-dom";

export const RequireAuth = ({ isAuth }) => {

    return (isAuth ? <Outlet /> : <Navigate to="/login" replace />)

}