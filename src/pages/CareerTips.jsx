import React from "react";

const tips = [
  {
    title: "Optimize Your Resume",
    content: "Tailor your resume for each job role by using keywords from the job description and focusing on achievements rather than responsibilities.",
  },
  {
    title: "Prepare for Interviews",
    content: "Practice common interview questions and prepare STAR-based examples to highlight your experience.",
  },
  {
    title: "Build Your LinkedIn Profile",
    content: "Make your profile keyword-rich, list certifications, and keep it updated to attract recruiters.",
  },
  {
    title: "Follow Up Professionally",
    content: "Send a thank-you email after interviews to express gratitude and reiterate your interest in the position.",
  },
  {
    title: "Upskill Regularly",
    content: "Take online courses or certifications in relevant tools and technologies to stay ahead in your industry.",
  },
];

const CareerTips = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Career Tips</h1>
        <p className="text-gray-600">
          Boost your career with expert-backed advice and actionable insights.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.content}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-700 mb-4">Looking for personalized career advice?</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Contact Our Experts
        </a>
      </div>
    </div>
  );
};

export default CareerTips;
