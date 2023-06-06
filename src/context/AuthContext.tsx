import React, { createContext, useState } from "react";

type User = {
  username: string;
  password: string | number;
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  login: (username: string, password: string | number) => void;
  logout: () => void;
};

interface AuthProps {
  children?: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string | number) => {
    setLoggedIn(true);
    setUser({ username, password });
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
  };

  return <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>{children}</AuthContext.Provider>;
};
