import React from "react";
import { useLocation } from "react-router-dom";

// Import all form components
import PersonalLoanForm from "../Forms/PersonalLoanForm";
import BusinessLoanForm from "../Forms/BusinessLoanForm";
import HomeLoanForm from "../Forms/HomeLoanForm";
import MortgageLoanForm from "../Forms/MortgageLoanForm";
import UsedCarLoanForm from "../Forms/UsedCarLoanForm";
import EducationLoanForm from "../Forms/EducationLoanForm";
import TractorLoanForm from "../Forms/TractorLoanForm";

// Loan type to component map
const formComponents = {
  personal: PersonalLoanForm,
  business: BusinessLoanForm,
  home: HomeLoanForm,
  "mortgage/laps": MortgageLoanForm,
  "used-car": UsedCarLoanForm,
  education: EducationLoanForm,
  tractor: TractorLoanForm,
};

const LoanApply = () => {
  const location = useLocation();
  const loanType = location.state?.loanType?.toLowerCase() || "personal";

  const FormComponent = formComponents[loanType];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        {loanType.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())} Loan Application
      </h2>

      {FormComponent ? (
        <FormComponent />
      ) : (
        <p className="text-center text-red-600">No form available for this loan type.</p>
      )}
    </div>
  );
};

export default LoanApply;
