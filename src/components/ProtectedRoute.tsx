import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SD_Role } from '../utils/SD';

interface ProtectedRouteProps {
  allowedRoles?: SD_Role[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user } = useSelector((state: any) => state.auth);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/accessDenied" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
