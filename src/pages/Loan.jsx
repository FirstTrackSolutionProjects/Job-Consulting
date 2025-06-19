import React from "react";
import { Link } from "react-router-dom";

const loanTypes = [
  { name: "Home Loan", type: "home" },
  { name: "Education Loan", type: "education" },
];

const LoanPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
        Choose a Loan Type
      </h2>

      {/* Loan List */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {loanTypes.map((loan) => (
          <div
            key={loan.type}
            className="border p-6 rounded shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{loan.name}</h3>
              <p className="text-sm text-gray-600">
                Apply for a {loan.name.toLowerCase()} with minimal documents and quick approval.
              </p>
            </div>

            {/* Buttons: Read More (left) and Apply Now (right) */}
            <div className="flex justify-between items-center mt-6">
              <Link
                to={`/loan-details/${loan.type}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </Link>
              <Link
                to="/loan/apply"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanPage;
