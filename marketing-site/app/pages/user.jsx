import { useState } from 'react';
import axios from 'axios';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestLevel: '',
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
      const response = await axios.post('/api/waitlist', formData);
      setResponseMessage('Successfully joined the waitlist!');
      setFormData({ name: '', email: '', interestLevel: '', message: '' });
    } catch (error) {
      setResponseMessage('Error joining the waitlist. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-5">Join Our Waitlist</h1>
      <form className="bg-white p-6 shadow rounded" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
          <label className="block text-gray-700">Interest Level</label>
          <select
            name="interestLevel"
            value={formData.interestLevel}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Submit
        </button>
        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-600">{responseMessage}</p>
        )}
      </form>
    </div>
  );
}
