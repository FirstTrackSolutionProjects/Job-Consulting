import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BadgePercent, CalendarClock, ShieldCheck, CheckCircle } from "lucide-react";

const LoanDetails = () => {
  const navigate = useNavigate();
  const { type } = useParams();

  const formatTitle = (slug) => {
    return slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  const loanType = formatTitle(type);

  return (
    <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        🏦 {loanType} Loan Details
      </h2>
      <p className="text-gray-700 text-center mb-6">
        Our {loanType.toLowerCase()} offers low interest rates and flexible repayment options.
        You’ll need income proof, KYC documents, and a valid CIBIL score for faster approval.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <BadgePercent className="text-blue-600" />
          <span>Interest rates from <strong>8.5%</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <CalendarClock className="text-blue-600" />
          <span>Tenure up to <strong>20 years</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-blue-600" />
          <span>No hidden charges</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-blue-600" />
          <span>Instant eligibility check</span>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/loan/apply", { state: { loanType } })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LoanDetails;
