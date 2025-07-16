'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitting(false);
    setConfirmation('Order placed successfully! Thank you for your purchase.');
    setFormData({ name: '', address: '', email: '', phone: '' });
  };

  return (
    <section className="container py-5">
      <h2 className="fw-bold mb-4">Checkout</h2>

      {confirmation && (
        <div role="alert" className="alert alert-success mb-4">
          {confirmation}
        </div>
      )}

      <form onSubmit={handleSubmit} className="row g-3" noValidate>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            name="name"
            aria-required="true"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            name="email"
            aria-required="true"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Shipping Address
          </label>
          <input
            id="address"
            type="text"
            className="form-control"
            name="address"
            aria-required="true"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="form-control"
            name="phone"
            aria-required="true"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={submitting}
            aria-disabled={submitting}
          >
            {submitting ? 'Processing...' : 'Confirm Order'}
          </button>
        </div>
      </form>
    </section>
  );
}
