import z from "zod";

export const TITLES = Object.freeze(['Mr', 'Mrs', 'Miss', 'Dr']);

export const GENDERS = Object.freeze(['Male', 'Female']);

export const MARITAL_STATUS = Object.freeze(['Unmarried', 'Married', 'Single']);

export const RESIDENCE_OWNERSHIP_TYPES = Object.freeze(['Own', 'Rented']);

export const BUSINESS_PROFESSION_TYPES = Object.freeze(['Retail/Shop/Mart', 'Manufacturing','Freelancer','IT Consulting', 'Media', 'Internet', 'Other'])

export const SERVICE_PROFESSION_TYPES = Object.freeze(["Private Job", "Government Job"])

export const GET_PROFESSION_TYPES = (key) => {
    const options = (key==="Business")?BUSINESS_PROFESSION_TYPES:SERVICE_PROFESSION_TYPES;
    return options;
}

export const GET_PROFESSION_TYPES_VALIDATION = (key) => {
    const validations = {
        "Business": z.enum(BUSINESS_PROFESSION_TYPES, { error: 'Profession type is required' }),
        "Service": z.enum(SERVICE_PROFESSION_TYPES, { error: 'Profession type is required' }),
    }
    return validations[key];
}

export const BUSINESS_ORGANIZATION_TYPES = Object.freeze(['Proprietor', 'Partnership', 'Private Limited', 'Other']);

export const BUSINESS_OWNERSHIP_TYPES = Object.freeze(['Own', 'Rented']);

//////////////USED CAR LOAN ENUMS//////////////



export const USED_CAR_LOAN_STD_CODES = Object.freeze(['+91']);

export const USED_CAR_LOAN_COUNTRIES = Object.freeze(['India']);

export const USED_CAR_LOAN_PROFESSIONS = Object.freeze(['Business', 'Service']);