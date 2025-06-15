// import React from "react";

// export default function Career() {
//   return (
//     <section className="bg-white py-16 px-6" id="career">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Left Side Image */}
//         <div>
//           <img
//             src="/images/career-growth.jpg"
//             alt="Career Growth"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* On mobile: full width inputs stacked, on desktop: 2-column inputs */}

//             <input
//               type="text"
//               placeholder="Full Name"
//               className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number"
//               className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               placeholder="Preferred Industry"
//               className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             {/* Communication Skill select spans both columns */}
//             <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
//             defaultValue={"Communication"}>
//               <option value="">
//                 Communication
//               </option>
//               <option>Excellent</option>
//               <option>Good</option>
//               <option>Average</option>
//               <option>Needs Improvement</option>
//             </select>

//             {/* Resume upload label and input */}
//             <div className="md:col-span-2">
//               <label className="block text-gray-700 font-sm mb-2">Upload Resume</label>
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               className="w-full px-4 py-2 border rounded-lg text-gray-600 file:mr-4 file:py-2 file:px-4  file:border-0 file:bg-gray-600 file:text-white file:cursor-pointer"
//             />
//             </div>

//             {/* Submit button full width */}
//             <div className="md:col-span-2 mt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-emerald-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
