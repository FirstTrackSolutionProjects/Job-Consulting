// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-15 relative">
//       <div className="w-full max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        
//         <img
//           src="/images/contact-us.jpg"
//           alt="Contact Us"
//           className="w-full h-80 object-cover lg:h-auto lg:w-1/2"
//         />
        
//         <div className="bg-white p-6 md:p-8 lg:w-1/2 mt-4">
//           <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">Contact Us</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="mobile">
//                 Mobile
//               </label>
//               <div className="flex">
//                  <select
//                     className="p-2 border border-gray-300 rounded-l bg-gray-100 text-sm"
//                     defaultValue="+91"
//                     >
//                   <option value="+91">+91 (India)</option>
//                   <option value="+1">+1 (USA)</option>
//                   <option value="+44">+44 (UK)</option>
//                   <option value="+61">+61 (Australia)</option>
//                 </select>
//               <input
//                 type="tel"
//                 id="mobile"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/919999999999" // Replace with your WhatsApp number (include country code)
//         className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaWhatsapp size={28} />
//       </a>
//     </div>
//   );
// };

// export default Contact;

import React from 'react'
import { Helmet} from "react-helmet"

const Contact = () => {
  return (
    <>
   
      <Helmet>
        <title>Contact | FTST </title>
        <meta
          name="description"
          content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
        />
        </Helmet>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <a
        href="https://firsttracksolutiontechnologies.com/contact" // Replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </div>
    </>
  )
}

export default Contact;

