import React, { useState } from 'react';

const MyForm = () => {
  const initialState = { name: '', email: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!formData.name || !formData.email) {
      alert('Please enter your name and email.');
      return;
    }

    // Submit the form data to the server or perform any other action
    console.log('Form data submitted:', formData);

    // Reset the form after submission
    setFormData(initialState);
  };

  return (
    <form className="p-4 border rounded" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="block">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
