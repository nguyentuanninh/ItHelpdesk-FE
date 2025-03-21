const LoginRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.replace('login');
    return null;
  }
  return children;
};

export default LoginRoute;
