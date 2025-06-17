import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs"; // Make sure job data is accessible here
import { ArrowLeft } from "lucide-react"; // optional icon library

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((job) => job.id.toString() === id);

  if (!job) {
    return <div className="text-center mt-20 text-red-600">Job not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 mt-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        <span className="mr-1">←</span> Back to Jobs
      </button>

      {/* Job Info */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-3 border">
        <h2 className="text-3xl font-bold text-gray-800">{job.title}</h2>
        <p className="text-gray-600">
          {job.company} • {job.location}
        </p>
        <p className="text-sm text-gray-500">
          Type: {job.jobType} | Experience: {job.experience} years
        </p>
        <p className="text-sm text-gray-500">Salary: {job.salary}</p>

        <hr className="my-4" />

        <p className="text-gray-700">
          {job.description }
        </p>

        {/* Apply button */}
        <button onClick={() => navigate("/career-form", { state: { jobTitle: job.title } })} className="mt-6 bg-green-600 text-white px-6 py-2 rounded ">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
