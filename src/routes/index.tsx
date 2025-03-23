import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import AccessDenied from '../pages/AccessDenied';
import ProtectedRoute from '../components/ProtectedRoute';
import { SD_Role } from '../utils/SD';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        // element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      // Add more routes as needed
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/accessDenied',
    element: <AccessDenied />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
