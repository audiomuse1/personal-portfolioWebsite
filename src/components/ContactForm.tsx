// src/components/ContactForm.tsx
"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for reaching out! Email: ${email}\nMessage: ${message}`);
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <label className="block">
        <span>Email:</span>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </label>
      <label className="block">
        <span>Message:</span>
        <textarea
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full border rounded px-3 py-2 mt-1"
          rows={5}
        />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
}