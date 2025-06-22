import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 lg:px-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-gray-900 bg-opacity-40 p-10 rounded-xl">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-purple-400" />
            <span className="text-gray-300">jayanth@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-purple-400" />
            <span className="text-gray-300">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-purple-400" />
            <span className="text-gray-300">Hyderabad, India</span>
          </div>
        </div>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
