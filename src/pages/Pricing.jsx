// import React from "react";

// const Pricing = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
//       <p className="text-gray-600 mb-10">Choose the plan that suits your hiring needs.</p>

//       <div className="grid md:grid-cols-3 gap-8">
//         {[
//           {
//             title: "Basic",
//             price: "₹999",
//             features: ["1 Job Post", "7 Days Validity", "Email Support"],
//           },
//           {
//             title: "Standard",
//             price: "₹2499",
//             features: ["5 Job Posts", "30 Days Validity", "Priority Email Support"],
//           },
//           {
//             title: "Premium",
//             price: "₹4999",
//             features: ["Unlimited Posts", "60 Days Validity", "Phone & Email Support"],
//           },
//         ].map((plan, index) => (
//           <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
//             <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
//             <p className="text-3xl font-extrabold text-blue-600 mb-6">{plan.price}</p>
//             <ul className="text-gray-600 mb-6 space-y-2">
//               {plan.features.map((f, i) => <li key={i}>✔ {f}</li>)}
//             </ul>
//             <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
//               Choose Plan
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Pricing;
