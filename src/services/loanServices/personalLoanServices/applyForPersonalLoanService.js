import applyForPersonalLoanSchema from "../../../schemas/loanSchemas/applyForPersonalLoanSchema";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const applyForPersonalLoanService = async (loanData) => {
    const result = applyForPersonalLoanSchema.safeParse(loanData);
    if (!result.success) {
        const zodErrors = JSON.parse(result.error);
        throw new Error(zodErrors?.[0]?.message || 'Validation failed');
    }
    let data;
    try{
        const response = await fetch(`${BACKEND_URL}/loans/apply-for-personal-loan`, {
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

export default applyForPersonalLoanService;