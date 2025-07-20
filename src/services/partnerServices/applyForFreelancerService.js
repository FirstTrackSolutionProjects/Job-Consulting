import applyForFreelancerSchema from "../../schemas/partnerSchemas/applyForFreelancerSchema";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const applyForFreelancerService = async (loanData) => {
    const result = applyForFreelancerSchema.safeParse(loanData);
    if (!result.success) {
        const zodErrors = JSON.parse(result.error);
        throw new Error(zodErrors?.[0]?.message || 'Validation failed');
    }
    let data;
    try{
        const response = await fetch(`${BACKEND_URL}/partners/apply-for-freelancer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result.data),
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

export default applyForFreelancerService;
