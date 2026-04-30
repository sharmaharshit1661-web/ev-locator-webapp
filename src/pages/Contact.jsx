import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Have questions about our platform or want to partner with us? We'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Headquarters</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">43 Street no. 4, Faridabad(Haryana)-121001</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">support@voltlocator.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              {submitted ? 'Message Sent!' : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
