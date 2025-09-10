import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const loanTypes = [
  { name: "Personal Loan", type: "personal"},
  { name: "Business Loan", type: "business" },
  { name: "Home Loan", type: "home" },
   { name: "Mortgage Loan", type: "mortgage/laps" },
  { name: "Used Car Loan", type: "used-car" },
  { name: "Education Loan", type: "education" },
  { name: "Tractor Loan", type: "tractor" },
];

const LoanPage = () => {
  return (
      <>
   
      <Helmet>
        <title>Loans | FTST </title>
        <meta
          name="description"
          content="Apply for personal, business, home, car, education, and other loans with FTST Job Consulting. Quick approval and minimal documentation."
        />
      </Helmet>

    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold text-blue-700 mb-5 text-center">
        Choose a Loan Type
      </h2>
      <img
        src="/images/loan.jpg"
        alt="Loan"
        className="w-full h-85 object-cover rounded-xl mb-6"
      />

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
            <div className="flex justify-between items-center mt-6">
              <Link
                to={`/loan-details/${loan.type}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More
              </Link>
              <Link
                to="/loan/apply"
                state={{ loanType: loan.type }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LoanPage;

