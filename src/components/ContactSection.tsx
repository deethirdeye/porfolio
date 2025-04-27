import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactSection.css';
import ContactSplineBackground from './ContactSplineBackground';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("mdkgkzyl");
  return (
    <section className="contact-section" id="contact" style={{position: 'relative', overflow: 'hidden'}}>
      <ContactSplineBackground />
      <div className="contact-content" style={{position: 'relative', zIndex: 2}}>
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" disabled={state.submitting}>Send Message</button>
          {state.succeeded && (
            <div className="contact-success">Thank you! I'll get back to you soon.</div>
          )}
        </form>
        <div className="contact-details">
          <p>Email: de2pakprem@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/deepakprem25/" target="_blank" rel="noopener noreferrer">deepakprem25</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
