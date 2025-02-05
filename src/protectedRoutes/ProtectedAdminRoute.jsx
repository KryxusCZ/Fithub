import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Cookies from 'js-cookie';

const ProtectedAdminRoute = () => {
  const [auth, setAuth] = useState(null);
  const { loginUser } = useUser();

  useEffect(() => {
    const userCookie = Cookies.get('user');

    // Pokud je cookie platná
    if (userCookie) {
      const user = JSON.parse(userCookie);
      const role = user.role;
      console.log('Role uživatele:', role);

      if (role === 'admin') {
        loginUser(user);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } else {
      setAuth(false);
    }
  }, []);

  if (auth === null) {
    return (
      <div className='loadingPage flex'>
        <div className='loading'></div>
      </div>
    );
  }

  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export default ProtectedAdminRoute;