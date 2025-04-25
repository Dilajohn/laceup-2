// src/store/AuthContext.tsx

'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { AuthState, User } from '../types/auth';
import { getUserFromStorage, logout } from '../lib/auth';

const AuthContext = createContext<{
  auth: AuthState;
  setAuth: (auth: AuthState) => void;
  logoutUser: () => void;
}>({
  auth: { user: null, token: null },
  setAuth: () => {},
  logoutUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: null,
  });

  useEffect(() => {
    const user = getUserFromStorage();
    if (user) {
      setAuth({ user, token: 'demo-token' });
    }
  }, []);

  const logoutUser = () => {
    logout();
    setAuth({ user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
