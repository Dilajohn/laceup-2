'use client'

import { useState } from 'react';
import { login, saveAuthToStorage } from '../../lib/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../store/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { token, user } = await login(email, password);
    saveAuthToStorage(token, user);
    setAuth({ user, token });
    router.push('/profile');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
}
// This is the login page of the application. It includes a form for users to enter their email and password.
// Upon submission, it calls the login function, saves the authentication token and user data to local storage, 
// and redirects to the profile page.