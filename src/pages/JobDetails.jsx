

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import { ArrowLeft } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find((job) => job.id.toString() === id);

  if (!job) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        Job not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 mt-10">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:underline mb-4 font-medium"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Jobs
      </button>

      {/* 🧾 Job Details Card */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800">{job.title}</h2>
          {/* Location */}
         <div className="text-sm text-gray-700">
                <strong>Location:</strong>
                <div className="mt-1 flex flex-wrap gap-x-1 gap-y-1 max-w-full break-words">
                  {Array.isArray(job.location)
                    ? job.location.map((loc, idx) => (
                        <span
                          key={idx}
                          className="after:content-['/'] last:after:content-none"
                        >
                          {loc}
                        </span>
                      ))
                    : <span>{job.location}</span>}
                </div>
              </div>
              
        <p className="text-sm text-gray-500">
          <strong>Type:</strong> {job.jobType} | <strong>Experience:</strong> {job.experience} years
        </p>
        <p className="text-sm text-gray-500">
          <strong>Salary:</strong> {job.salary}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Work Mode:</strong> Remote / Hybrid / Onsite
        </p>
        <p className="text-sm text-gray-500">
          <strong>Education:</strong> {job.education}
        </p>

        {Array.isArray(job.skills) && job.skills.length > 0 && (
          <div>
            <strong className="text-sm text-gray-500">Skills:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {job.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(job.responsibilities) && job.responsibilities.length > 0 && (
          <div>
            <strong className="text-sm text-gray-500">Responsibilities:</strong>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}

        <hr className="my-4" />

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {job.description}
        </p>

        {/* Apply Now Button */}
        <div className="text-center pt-6">
          <button
            onClick={() => navigate("/career-form", { state: { jobTitle: job.title } })}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
