import React from "react";
import { Link, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";
import { Helmet } from "react-helmet";

const CurrentOpening = () => {
  const navigate = useNavigate();

  return (
     <>
    <Helmet>
            <title>Current Openings | FTST </title>
            <meta
              name="description"
              content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
            />
          </Helmet>
    <div className="max-w-4xl mx-auto px-4 py-10 mt-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Current Openings
      </h1>

      <img
        src="/images/current-openings.jpg"
        alt="Loan"
        className="w-full h-110 object-cover rounded-xl mb-6"
      />


      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No job openings available right now.</p>
      ) : (
        <div className="space-y-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Job Title Heading */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {job.title}
              </h2>

              {/* Job Info */}
              
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

              <p className="text-sm text-gray-500 mb-1">
                <strong>Type:</strong> {job.jobType}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Experience:</strong> {job.experience} years
              </p>
              {/* <p className="text-sm text-gray-500 mb-4">
                <strong>Salary:</strong> {job.salary}
              </p> */}

              {/* Buttons */}
              <div className="mt-4 flex justify-between">
                <Link
                  to={`/jobs/${job.id}`}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
                <a
                  href="https://firsttracksolutiontechnologies.com/career"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium inline-block text-center"
                >
                  Apply Now
                </a>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default CurrentOpening;
