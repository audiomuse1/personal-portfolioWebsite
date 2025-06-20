"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form
      action="https://formsubmit.co/andrewhartford2@gmail.com"
      method="POST"
      className="max-w-md space-y-4"
    >
      {/* Anti-spam honeypot */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Optional: redirect to thank you page */}
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

      <label className="block">
        <span>Email:</span>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </label>

      <label className="block">
        <span>Message:</span>
        <textarea
          name="message"
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
