import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    canActivate: boolean;
    redirectPath?: string;
}

const ProtectedRoute = ({
    canActivate,
    redirectPath = "/",
}: ProtectedRouteProps) => {
    console.log("CAN ACTIVATE ES " + canActivate);
    return canActivate ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
