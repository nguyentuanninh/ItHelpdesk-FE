import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { SD_Role_Name } from '../utils/SD';
type DecodedToken = {
  role: string;
};

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Chuyển hướng đến trang đăng nhập nếu không có token
    return <Navigate to="/home" replace />;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    // Kiểm tra vai trò admin
    if (decoded.role !== SD_Role_Name.ADMIN) {
      return <Navigate to="/accessDenied" replace />;
    }
    return children;
  } catch (error) {
    console.error('Token không hợp lệ:', error);
    return <Navigate to="/login" replace />;
  }
};

export default AdminRoute;
