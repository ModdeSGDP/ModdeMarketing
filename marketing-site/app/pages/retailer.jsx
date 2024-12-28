import { useState } from 'react';
import axios from 'axios';

export default function Retailers() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    businessType: '',
    location: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/retailers', formData);
      setResponseMessage('Successfully submitted your details!');
      setFormData({ businessName: '', email: '', businessType: '', location: '', message: '' });
    } catch (error) {
      setResponseMessage('Error submitting details. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-5">Partner with Us</h1>
      <form className="bg-white p-6 shadow rounded" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Business Type</label>
          <input
            type="text"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location (Optional)</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
          Submit
        </button>
        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-600">{responseMessage}</p>
        )}
      </form>
    </div>
  );
}
