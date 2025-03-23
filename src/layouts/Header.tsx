import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import { SD_Role } from '../utils/SD';

function Header() {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="text-xl font-bold">IT Helpdesk</div>
        <nav className="ml-auto">
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="text-foreground hover:text-primary">
                Home
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-foreground hover:text-primary"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-foreground hover:text-primary"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                >
                  <span>{user.username}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md border bg-background py-1 shadow-lg">
                    <div className="border-b px-4 py-2">
                      <p className="font-medium">{user.username}</p>
                      <p className="text-sm text-muted-foreground">
                        {SD_Role[user.role as keyof typeof SD_Role]}
                      </p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-accent"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-accent"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
