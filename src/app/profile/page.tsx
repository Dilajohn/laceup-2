'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../store/AuthContext';

export default function ProfilePage() {
  const { auth } = useAuth();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (auth.user) {
      setUserInfo(prev => ({
        ...prev,
        name: auth.user.name || '',
        email: auth.user.email || '',
      }));
    }
  }, [auth.user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated!');
    // ✅ Optionally update user profile state/server here
  };

  return (
    <ProtectedRoute>
      <section className="container py-5">
        <h2 className="fw-bold mb-4">My Profile</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </ProtectedRoute>
  );
}
// This code defines a ProfilePage component that allows users to update their profile information.
//  It uses React's useState hook to manage the state of the user information and handles form submission with a simple alert. 
// The form includes fields for full name, email, address, and phone number, all styled with Bootstrap classes.