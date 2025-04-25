// Handles login, logout, register, and auth token logic.

// src/lib/auth.ts

export const login = async (email: string, password: string) => {
    // Replace with real API call
    return { token: 'demo-token', user: { id: 'u1', name: 'John Doe', email } };
  };
  
  export const register = async (email: string, password: string) => {
    // Replace with real API call
    return { token: 'demo-token', user: { id: 'u1', name: 'John Doe', email } };
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  
  export const saveAuthToStorage = (token: string, user: any) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const getUserFromStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  