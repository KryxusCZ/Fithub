import React, { createContext, useState, useContext } from 'react';

// Vytvoření kontextu
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const loginUser = (userData) => {
    setUser(userData);
    setRole(userData.role);
  };

  const logoutUser = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <UserContext.Provider value={{ user, role, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Vlastní hook pro snadný přístup k UserContextu
export const useUser = () => useContext(UserContext);