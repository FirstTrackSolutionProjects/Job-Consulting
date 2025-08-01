import applyForUsedCarLoanSchema from "../../../schemas/loanSchemas/applyForUsedCarLoanSchema";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const applyForUsedCarLoanService = async (loanData) => {
    console.log(loanData)
    // return;
    let data;
    try{
        const response = await fetch(`${BACKEND_URL}/loans/apply-for-used-car-loan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loanData),
        });
        data = await response.json();
        if (!data.success){
            throw new Error(data?.message || 'Something went wrong');
        }
        return data?.data;
    } catch (error) {
        console.error(error);
        throw new Error('Unexpected error occurred');
    }
}

export default applyForUsedCarLoanService;
