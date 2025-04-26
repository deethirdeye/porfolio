import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
        {submitted && <div className="contact-success">Thank you! I'll get back to you soon.</div>}
      </form>
      <div className="contact-details">
        <p>Email: de2pakprem@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/deepakprem25/" target="_blank" rel="noopener noreferrer">deepakprem25</a></p>
      </div>
    </section>
  );
};

export default ContactSection;
