'use client';
import { useState } from 'react';

export default function ConnectUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#1A1E2C] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-4">Lets Stay Connected</h1>
        <p className="text-center text-gray-400 mb-12">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using.
        </p>

        {/* Contact Information and Form Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-2">Email Address</h3>
              <p className="text-gray-400">support@startup.com</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Office Location</h3>
              <p className="text-gray-400">Park, Green vale, California USA</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Phone Number</h3>
              <p className="text-gray-400">+009 8754 3433 223</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Skype Email</h3>
              <p className="text-gray-400">example@yourmail.com</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-medium mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Full name</label>
                <input
                  type="text"
                  placeholder="David Wonder"
                  className="w-full p-3 rounded bg-[#242837] border border-gray-700"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-3 rounded bg-[#242837] border border-gray-700"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Phone number</label>
                <input
                  type="tel"
                  placeholder="+008 3342 3432"
                  className="w-full p-3 rounded bg-[#242837] border border-gray-700"
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Type your subject"
                  className="w-full p-3 rounded bg-[#242837] border border-gray-700"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full p-3 rounded bg-[#242837] border border-gray-700"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
