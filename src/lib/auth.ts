// src/lib/auth.ts

export interface User {
  id: string;
  name: string;
  email: string;
}

const STORAGE_TOKEN_KEY = 'laceup_token';
const STORAGE_USER_KEY = 'laceup_user';

/**
 * Simulates login API call to authenticate user.
 * @param email user's email
 * @param password user's password
 * @returns object with auth token and user data
 */
export async function login(email: string): Promise<{ token: string; user: User }> {
  try {
    // TODO: Replace with actual API call for login/auth here
    // Simulating API delay
    await new Promise((r) => setTimeout(r, 500));

    // Example fixed response
    return {
      token: 'demo-token',
      user: {
        id: 'u1',
        name: 'John Doe',
        email,
      },
    };
  } catch  {
    throw new Error('Login failed');
  }
}

/**
 * Simulates user registration API call.
 * @param email user's email
 * @param password user's password
 * @returns object with auth token and user data
 */
export async function register(email: string): Promise<{ token: string; user: User }> {
  try {
    // TODO: Replace with actual registration API call
    await new Promise((r) => setTimeout(r, 500));

    return {
      token: 'demo-token',
      user: {
        id: 'u1',
        name: 'John Doe',
        email,
      },
    };
  } catch  {
    throw new Error('Registration failed');
  }
}

/**
 * Saves auth token and user info in localStorage.
 * @param token JWT or session token
 * @param user User object
 */
export function saveAuthToStorage(token: string, user: User): void {
  localStorage.setItem(STORAGE_TOKEN_KEY, token);
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
}

/**
 * Retrieves the auth token from localStorage.
 */
export function getTokenFromStorage(): string | null {
  return localStorage.getItem(STORAGE_TOKEN_KEY);
}

/**
 * Retrieves the user object from localStorage.
 */
export function getUserFromStorage(): User | null {
  const user = localStorage.getItem(STORAGE_USER_KEY);
  if (!user) return null;
  try {
    return JSON.parse(user) as User;
  } catch (e) {
    console.error('Failed to parse stored user:', e);
    return null;
  }
}

/**
 * Clears auth info from localStorage.
 */
export function logout(): void {
  localStorage.removeItem(STORAGE_TOKEN_KEY);
  localStorage.removeItem(STORAGE_USER_KEY);
}
