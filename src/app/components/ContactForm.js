"use client";
import React, { useState } from 'react';
import styles from '@/app/styles/style.css';
import '@/app/styles/contact.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import Link from 'next/link';
import Image from 'next/image';

const ContactForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone,
          subject: user.subject,
          message: user.message,
        }),
      });

      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (e) {
      console.log(e);
      setStatus('error');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Contact Form</h2>
        {status === 'success' && (
          <p className="success-message">Form submitted successfully!</p>
        )}
        {status === 'error' && (
          <p className="error-message">Error submitting the form. Please try again later.</p>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={user.name}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            onChange={handleChange}
            value={user.subject}
            name="subject"
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            onChange={handleChange}
            value={user.phone}
            name="phone"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={user.message}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
