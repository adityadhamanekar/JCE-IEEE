// ContactForm.jsx

import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact_body">
      <div className='contact'>
        <h1 className='contacth'>Connect with us</h1>
        <form onSubmit={handleSubmit} className='needs-validation' noValidate>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='form-control'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className='invalid-feedback'>Please Enter Your Name.</div>
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter your Email'
              className='form-control'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className='invalid-feedback'>Please Enter your Email.</div>
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label'>
              Phone No.
            </label>
            <input
              type='text'
              name='phone'
              placeholder='Enter Phone No.'
              className='form-control'
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className='invalid-feedback'>Please Enter your Phone no.</div>
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label'>
              How Can we help you?
            </label>
            <textarea
              name='message'
              cols='30'
              rows='4'
              className='form-control'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className='invalid-feedback'>Please fill out this field.</div>
          </div>
          <button type='submit' className='btn btn-dark send-btn'>
            Send Message
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
