import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import authModel from '../types/authModel';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from '../services/authApi';
import apiResponse from '../types/apiResponse';
import { setCredentials } from '../store/slice/authSlice';
import MiniLoader from '../components/MiniLoader';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loginUser] = useLoginUserMutation();

  //check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { userId } = jwtDecode(token) as authModel;
        if (userId) {
          navigate('/');
        }
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
  }, [navigate]);

  //handle user input
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const response: apiResponse = await loginUser(userInput);

    if (response.data) {
      const { token } = response.data.result;
      localStorage.setItem('token', token);
      const { userId, username, role }: authModel = jwtDecode(token);
      // Lưu token và thông tin người dùng vào Redux store
      dispatch(setCredentials({ token, user: { userId, username, role } }));
      navigate('/');
    } else if (response.error) {
      setError(response.error.data.errorMessages[0]);
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-md space-y-6 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Login to IT Helpdesk</h1>
        <p className="mt-2 text-muted-foreground"></p>
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Username
            </label>
            <input
              id="email"
              type="text"
              name="username"
              value={userInput.username}
              onChange={handleUserInput}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="ninh.nguyen@seta-international.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={userInput.password}
              onChange={handleUserInput}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-danger small text-center">{error}</p>}
          <Button className="w-full" disabled={loading}>
            {loading ? <MiniLoader color="white"></MiniLoader> : 'Login'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link
            to="/register"
            className="text-primary underline-offset-4 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
