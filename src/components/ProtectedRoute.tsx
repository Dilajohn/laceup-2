'use client';

import { useAuth } from '../store/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.user) {
      router.push('/login');
    }
  }, [auth.user, router]);

  if (!auth.user) {
    return (
      <main className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status" aria-label="Loading...">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
