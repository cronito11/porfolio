//the Contact.jsx, Luis Eduardo Orjuela Rojas, 301474380, 28/09/2024

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lastName: '',
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Redirect to the home page after submission
    navigate('/'); // Redirect to home
  };

  return (
    <>
      <h1>Contact</h1>
      <div className="columns">
        <div className="column"></div>
        <div className="divider-vert" data-content="OR"></div>
        <div className="column">
          <div className="column col-9 col-sm-12">
            <h2>Send Mail</h2>
            <form className="form-group" onSubmit={handleSubmit}>
                <label className="form-label text-left" htmlFor="input-FirstName">First Name</label>
                <input className="form-input" type="text" id="input-FirstName" name="name" value={formData.name} onChange={handleChange} placeholder="First Name" />
                <label className="form-label text-left" htmlFor="input-LastName">Last Name</label>
                <input className="form-input" type="text" id="input-LastName" name="lastName" onChange={handleChange} placeholder="Last Name" />
                <label className="form-label text-left" htmlFor="input-Number">Contact Number</label>
                <input className="form-input" type="tel" id="input-Number" name="contactNumber" onChange={handleChange} placeholder="0(000)000-0000" />
                <label className="form-label text-left" htmlFor="input-email">Email</label>
                <input className="form-input" type="email" id="input-email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <label className="form-label text-left" htmlFor="input-example-3">Message</label>
                <textarea className="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
                <Submit />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function Submit() {
    return (
        <button type="submit">
            Submit
        </button>
    );
}