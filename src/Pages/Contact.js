import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_6i2rmgt', // Replace with your Service ID
        'template_7dh4c8m', // Replace with your Template ID
        {
          to_email: 'your_email@example.com', // Replace with your email address
          from_name: email,
          message,
        },
        'iNvey1DCKXCrWs61j' // Replace with your User ID
      );

      setSuccessMessage('Email sent successfully!');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className='website'>
      <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} required />
        </div>
        <div className="button">
          <button type="submit">Send</button>
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
    </div>
  );
};

export default Contact;
