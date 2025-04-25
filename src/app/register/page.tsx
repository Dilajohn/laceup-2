'use client';

import { useState } from 'react';
import { register, saveAuthToStorage } from '../../lib/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../store/AuthContext';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { token, user } = await register(email, password);
    saveAuthToStorage(token, user);
    setAuth({ user, token });
    router.push('/profile');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-success w-100" type="submit">Register</button>
      </form>
    </div>
  );
}