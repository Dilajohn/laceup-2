'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Shipping Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success w-100">
            Confirm Order
          </button>
        </div>
      </form>
    </section>
  );
}
