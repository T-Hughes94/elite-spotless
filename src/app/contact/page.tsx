"use client";

import Header from '../components/Header';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setErrorMessage('Please fill in all fields correctly.');
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formState
      );
      setFormSubmitted(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send contact form:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const validateForm = () => {
    const { name, email, phone, message } = formState;
    return (
      validateName(name) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      message.trim().length > 0
    );
  };

  const validateName = (name: string) => /^[A-Za-z\s]{1,}$/.test(name);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  return (
    <>
      <Header />

      {/* Contact Header Section */}
      <section
        className="relative pt-28 md:pt-10 pb-10 md:pb-16 h-[250px] md:h-[250px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/ecslogo.webp')" }} // Use an appropriate background image for the contact page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}

        {/* Container for Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
          
          {/* Hero Section Content Left-Aligned for Both Mobile and Desktop */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 flex flex-col justify-center h-full space-y-4">
            {/* Subtext "Get in Touch" */}
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-[#94c2d2]"></div>
              <span className="ml-4 text-lg font-medium text-white">Get in Touch</span>
            </div>

            {/* Hero Main Text */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">Contact Elite Spotless Cleaning</h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Styling Similar to Quote Form */}
      <div className="w-full bg-white py-16">
        <div id="contact" className="max-w-[1040px] mx-auto p-4 bg-[#94c2d2] shadow-lg rounded-lg">
          <h1 className="py-4 text-4xl font-bold text-center text-white underline">Contact Us</h1>
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error:</strong>
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className='grid md:grid-cols-2 gap-4 w-full'>
                {/* Name Field */}
                <div className='flex flex-col'>
                  <label className='uppercase text-sm font-semibold py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={handleChange}
                    pattern="[A-Za-z\s]{1,}"
                    title="Name should contain only letters"
                    required
                  />
                </div>
                {/* Email Field */}
                <div className='flex flex-col'>
                  <label className='uppercase text-sm font-semibold py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                    type='email'
                    name='email'
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Phone Field */}
                <div className='flex flex-col'>
                  <label className='uppercase text-sm font-semibold py-2'>Phone</label>
                  <input
                    className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                    type='tel'
                    name='phone'
                    value={formState.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Phone number should be 10 digits"
                    required
                  />
                </div>
              </div>
              {/* Message Field */}
              <div className='flex flex-col'>
                <label className='uppercase text-sm font-semibold py-2'>Message</label>
                <textarea
                  name='message'
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className='border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:ring-[#001b5e]'
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className='w-full text-center'>
                <button
                  type='submit'
                  className='bg-gray-100 text-black py-3 px-6 mt-4 rounded-lg uppercase tracking-wide font-semibold border-2 border-white hover:bg-[#94c2d2] focus:outline-none'
                >
                  Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className='text-center'>
              <p className='text-4xl font-semibold text-green-500'>Thank you for contacting us!</p>
              <p className='py-4'>We have received your message and will get back to you soon.</p>
              <p className='py-4 text-xl'>Best regards,<br />Elite Spotless Cleaning</p>
            </div>
          )}
        </div>
      </div>

      {/* Gratitude Section */}
      <section className="py-12 bg-[#94c2d2]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-semibold text-white mb-4">Thank You for Reaching Out to Elite Spotless Cleaning!</h3>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;




