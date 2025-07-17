'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login, saveAuthToStorage } from '../../lib/auth';
import { useAuth } from '../../store/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Call login with two separate arguments: email and password
      const { token, user } = await login(email, password);
      saveAuthToStorage(token, user);
      setAuth({ user, token });
      router.push('/profile');
    } catch {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: 400 }} noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={!!error}
          />
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={!!error}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="btn btn-sm btn-outline-secondary position-absolute top-50 end-0 translate-middle-y me-2"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {error && (
          <div className="text-danger mb-3" role="alert">
            {error}
          </div>
        )}

        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}


