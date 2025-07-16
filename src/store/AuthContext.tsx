'use client';

import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { getTokenFromStorage, getUserFromStorage, logout } from '../lib/auth';
import { AuthState } from '../types/auth';

interface AuthContextType {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
  logoutUser: () => void;
  loading: boolean;
}

const defaultAuthState: AuthState = {
  user: null,
  token: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>(defaultAuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUserFromStorage();
    const token = getTokenFromStorage();
    if (user && token) {
      setAuth({ user, token });
    }
    setLoading(false);
  }, []);

  const logoutUser = useCallback(() => {
    logout();
    setAuth(defaultAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to consume AuthContext with error check
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

