import CustomButton from "@/Components/CustomComponents/CustomButton";
import CustomForm from "@/Components/CustomComponents/CustomForm"
import { useApp } from "@/contexts/AppContext"
import applyForEducationLoanService from "@/services/loanServices/educationLoanServices/applyForEducationLoanService";
import { useRef } from "react"
import { toast } from "react-toastify";

const EducationLoanForm = () => {
  const { educationLoanFormFields, setEducationLoanFormFields} = useApp();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      await applyForEducationLoanService(formData);
      toast.success("Education Loan Application Submitted Successfully");
     
     
    } catch (error) {
      toast.error("Failed to submit Education Loan Application");
    }
  };

  return (
     <div className="max-w-7xl mx-auto p-4 flex flex-col items-center gap-4">
      <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <img
          src="/Loan/education-loan.jpg"
          alt="Loan"
          className="w-full h-96 object-cover lg:h-auto"
        />
      </div>
      <CustomForm 
        ref={formRef}
        fields={educationLoanFormFields}
        setFields={setEducationLoanFormFields}
        handleSubmit={handleSubmit}
      />
      <CustomButton 
        onClick={() => formRef?.current?.submitForm()}
        title={formRef?.current?.loadingState || 'SUBMIT'}
        disabled={formRef?.current?.loadingState}
      />
    </div>
  )
}

    
export default EducationLoanForm;