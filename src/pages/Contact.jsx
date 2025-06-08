import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 bg-gray-200 rounded-lg shadow-lg">
        <img src="/images/contact-us.jpg" alt="Contact Us" className="w-full h-48 object-cover rounded-lg mb-6" />
      <div className="bg-white p-8 rounded-lg shadow-md w-150 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="subject">Mobile</label>
            <input type="mobile" id="subject" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
        </form>
      </div>
    </div>
  </div>
 
  )
}

export default Contact;