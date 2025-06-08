// import React from "react";
// import { useParams } from "react-router-dom";

// const JobDetails = () => {
//   const { id } = useParams();

//   const job = {
//     id,
//     title: "Frontend Developer",
//     company: "TechNova",
//     location: "Delhi",
//     description: "We're looking for a passionate Frontend Developer...",
//     requirements: ["React.js", "Tailwind CSS", "2+ years experience"]
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
//       <p className="text-gray-600 mb-4">{job.company} – {job.location}</p>
//       <h2 className="text-xl font-semibold mb-2">Job Description</h2>
//       <p className="mb-4 text-gray-700">{job.description}</p>
//       <h2 className="text-xl font-semibold mb-2">Requirements</h2>
//       <ul className="list-disc pl-6 text-gray-700">
//         {job.requirements.map((req, index) => (
//           <li key={index}>{req}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobDetails;