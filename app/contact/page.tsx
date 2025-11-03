"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get the selected product from sessionStorage only on client side
    if (typeof window !== 'undefined') {
      const product = sessionStorage.getItem('selectedProduct');
      if (product) {
        setFormData(prev => ({
          ...prev,
          product: product
        }));
        // Clear it from sessionStorage after using it
        sessionStorage.removeItem('selectedProduct');
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Get in touch with us for all your packaging needs. We're here to help you find the perfect solution.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Product of Interest
              </label>
              <input
                type="text"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Select a product or enter manually"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-200 text-gray-800 placeholder-gray-500"
                placeholder="Enter your phone number (optional)"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-200 resize-vertical text-gray-800 placeholder-gray-500"
                placeholder="Tell us about your packaging requirements (optional)"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}