
import React, { createContext, useState, useEffect, useContext } from "react";
import z from "zod";
import { v4 } from "uuid";
import { USED_CAR_LOAN_STD_CODES, TITLES, GENDERS, MARITAL_STATUS, RESIDENCE_OWNERSHIP_TYPES, USED_CAR_LOAN_COUNTRIES, USED_CAR_LOAN_PROFESSIONS, BUSINESS_PROFESSION_TYPES, BUSINESS_ORGANIZATION_TYPES, BUSINESS_OWNERSHIP_TYPES, GET_PROFESSION_TYPES, GET_PROFESSION_TYPES_VALIDATION } from "../constants";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formUuid, setFormUuid] = useState(v4());
    const refreshFormUuid = () => {
        setFormUuid(v4());
    }

    ///////////////////////////////////FORM FIELDS START//////////////////////////////////////////

    const [usedCarLoanFormFields, setUsedCarLoanFormFields] = useState({
        photo: {
            category: "PERSONAL DETAILS",
            inputType: 'photo',
            required: true,
            label: "Photo",
            key: `loans/usedCarLoans/${formUuid}/photo-${v4()}`,
            allowedTypes: ['image/jpeg', 'image/png'],
            unsupportedTypeMessages: "Only PNG and JPG files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Photo is required"
                : issue.code === "invalid_type"
                ? "Invalid Photo"
                : undefined
            }).min(1, {error: "Photo is required"})
        },
        title: {
            label: "Title",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => TITLES,
            validation: z.enum(TITLES, { error: 'Title is required' }),
            colSpan: 2
        },
        fullName: {
            label: "Full Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Full name is required'
                    : issue.code === 'invalid_type'
                    ? 'Full name must be string'
                    : undefined
              }).min(3, { error: 'Full name must be at least 3 characters' }),
            colSpan: 10
        },
        email: {
            label: "Email",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Email is required'
                    : issue.code === 'invalid_type'
                    ? 'Email must be string'
                    : undefined
              }).email({ error: 'Invalid email address' }),
            colSpan: 6
        },
        stdCode: {
            label: "STD Code",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => USED_CAR_LOAN_STD_CODES,
            validation: z.enum(USED_CAR_LOAN_STD_CODES, { error: 'STD code is required' }),
            colSpan: 2
        },
        phone: {
            label: "Phone",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Phone number is required'
                    : issue.code === 'invalid_type'
                    ? 'Phone must be string'
                    : undefined
              }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10-digit Indian mobile number' }),
            colSpan: 4
        },
        altStdCode: {
            label: "Alt. STD",
            inputType: "select",
            required: false,
            options: [],
            getOptions: () => USED_CAR_LOAN_STD_CODES,
            validation: z.enum(USED_CAR_LOAN_STD_CODES, { error: 'Alternate STD code is required' }).optional(),
            colSpan: 2
        },
        altPhone: {
            label: "Alternate Phone",
            inputType: "text",
            required: false,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Alternate phone number is required'
                    : issue.code === 'invalid_type'
                    ? 'Alternate phone must be string'
                    : undefined
              }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10-digit Indian mobile number' }).optional(),
            colSpan: 4
        },
        dob: {
            label: "Date of Birth",
            inputType: "date",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'DOB is required'
                    : issue.code === 'invalid_type'
                    ? 'DOB must be string'
                    : undefined
              }).regex(/^\d{4}-\d{2}-\d{2}$/, { error: 'DOB must be in yyyy-mm-dd format' }),
            colSpan: 4
        },
        gender: {
            label: "Gender",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => GENDERS,
            validation: z.enum(GENDERS, { error: 'Gender is required' }),
            colSpan: 4
        },
        residence: {
            category: "PRESENT ADDRESS DETAILS",
            label: "Residence",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => RESIDENCE_OWNERSHIP_TYPES,
            validation: z.enum(RESIDENCE_OWNERSHIP_TYPES, { error: 'Residence type is required' }),
            colSpan: 12
        },
        presentAddress: {
            label: "Present Address",
            inputType: "textField",
            maxLength:200,
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Present address is required'
                    : issue.code === 'invalid_type'
                    ? 'Present address must be string'
                    : undefined
              }).min(5, { error: 'Present address must be at least 5 characters' })
              .max(200, "Present address must be less than 200 characters"),
            colSpan: 12
        },
        landmark: {
            label: "Landmark",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Landmark is required'
                    : issue.code === 'invalid_type'
                    ? 'Landmark must be string'
                    : undefined
              }).min(3, { error: 'Landmark must be at least 3 characters' }),
            colSpan: 12
        },
        city: {
            label: "City",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'City is required'
                    : issue.code === 'invalid_type'
                    ? 'City must be string'
                    : undefined
              }).min(2, { error: 'City must be at least 2 characters' }),
            colSpan: 3
        },
        state: {
            label: "State",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'State is required'
                        : issue.code === 'invalid_type'
                        ? 'State must be string'
                        : undefined
                }).min(2, { error: 'State must be at least 2 characters' }),
            colSpan: 3
        },
        pincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit Indian pincode' }),
            colSpan: 3
        },
        country: {
            label: "Country",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => USED_CAR_LOAN_COUNTRIES,
            validation: z.enum(USED_CAR_LOAN_COUNTRIES, { error: 'Country is required' }),
            colSpan: 3
        },
        sameAsPresentAddress: {
            label: "Same as Present Address",
            inputType: "switch",
            required: true,
            validation: z.boolean({ error: 'This field is required' }),
            colSpan: 12
        },
        permanentAddress: {
            label: "Permanent Address",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return !formData.sameAsPresentAddress;
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Permanent address is required'
                    : issue.code === 'invalid_type'
                    ? 'Permanent address must be string'
                    : undefined
              }).min(5, { error: 'Permanent address must be at least 5 characters' }),
            colSpan: 12
        },
        fatherName: {
            category: "FAMILY DETAILS",
            label: "Father's Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? "Father's name is required"
                    : issue.code === 'invalid_type'
                    ? "Father's name must be string"
                    : undefined
              }).min(3, { error: "Father's name must be at least 3 characters" }),
        },
        motherName: {
            label: "Mother's Name",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? "Mother's name is required"
                    : issue.code === 'invalid_type'
                    ? "Mother's name must be string"
                    : undefined
              }).min(3, { error: "Mother's name must be at least 3 characters" }),
        },
        maritalStatus: {
            label: "Marital Status",
            inputType: "select",
            required: true,
            options:[],
            getOptions: () => MARITAL_STATUS,
            validation: z.enum(MARITAL_STATUS, { error: 'Marital status is required' }),
        },
        spouseName: {
            label: "Spouse's Name",
            inputType: "text",
            required: false,
            conditions: (formData) => {
                return formData.maritalStatus === "Married";
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? "Spouse's name is required"
                    : issue.code === 'invalid_type'
                    ? "Spouse's name must be string"
                    : undefined
              }).min(3, { error: "Spouse's name must be at least 3 characters" }),
        },
        childrenCount: {
            label: "Children Count",
            inputType: "number",
            required: false,
            conditions: (formData) => {
                return formData.maritalStatus === "Married";
            },
            validation: z.coerce.number({
                error: issue =>
                  issue.input === undefined
                    ? 'Children count is required'
                    : issue.code === 'invalid_type'
                    ? 'Children count must be a number'
                    : undefined
              }).min(0, { error: 'Children count cannot be negative' }),
        },
        aadhaar: {
            category: "KYC DETAILS",
            label: "Aadhaar Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Aadhaar number is required'
                    : issue.code === 'invalid_type'
                    ? 'Aadhaar number must be string'
                    : undefined
              }).regex(/^\d{12}$/, { error: 'Aadhaar number must be a 12-digit number' }),
        },
        pan: {
            label: "PAN Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'PAN number is required'
                    : issue.code === 'invalid_type'
                    ? 'PAN number must be string'
                    : undefined
              }).regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, { error: 'PAN number must be a valid PAN format' }),
        },
        profession: {
            category: "PROFESSION",
            label: "Profession",
            inputType: "select",
            required: true,
            options: [],
            getOptions: () => USED_CAR_LOAN_PROFESSIONS,
            validation: z.enum(USED_CAR_LOAN_PROFESSIONS, { error: 'Profession is required' }),
            colSpan: 12
        },
        professionType: {
            label: "Profession Type",
            inputType: "select",
            required: true,
            dependOn: ['profession'],
            options: [],
            getOptions: GET_PROFESSION_TYPES,
            validation: GET_PROFESSION_TYPES_VALIDATION,
            conditions: (formData) => {
                return formData.profession;
            },
        },
        organizationType: {
            label: "Organization Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_ORGANIZATION_TYPES,
            validation: z.enum(BUSINESS_ORGANIZATION_TYPES, { error: 'Organization type is required' }),
        },
        businessType: {
            label: "Business Ownership Type",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            options: [],
            getOptions: () => BUSINESS_OWNERSHIP_TYPES,
            validation: z.enum(BUSINESS_OWNERSHIP_TYPES, { error: 'Ownership type is required' }),
        },
        industry: {
            label: "Industry",
            inputType: 'text',
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business";
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Industry is required":
                    issue.code === "invalid_type"?
                    "Industry must be string":
                    undefined
            }).min(3, {error: "Industry must be atleast 3 characters long"})
        },
        businessName: {
            label: "Business Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue => 
                    issue.input == undefined ?
                    "Business Name is required":
                    issue.code === "invalid_type"?
                    "Business Name must be string":
                    undefined
            }).min(3, {error: "Business Name must be atleast 3 characters long"})
        },
        businessYears: {
            label: "Years in Business",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Years in Business is required":
                    issue.code === "invalid_type"?
                    "Years in Business must be number":
                    undefined
            }).min(1, {error: "Years in Business must be atleast 1 year"})
        },
        businessannualturnover: {
            label: "Annual Turnover",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.coerce.number({
                error: issue => 
                    issue.input == undefined ?
                    "Annual Turnover is required":
                    issue.code === "invalid_type"?
                    "Annual Turnover must be number":
                    undefined
            }).min(1000, {error: "Annual Turnover must be atleast 1000"})
        },
        businessAddress: {
            label: "Business Address",
            inputType: "textField",
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            maxLength: 200,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business address is required'
                    : issue.code === 'invalid_type'
                    ? 'Business address must be string'
                    : undefined
              }).min(5, { error: 'Business address must be at least 5 characters' })
              .max(200, "Business address must be less than 200 characters"),
            colSpan:12
        },
        businessCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Business City is required'
                    : issue.code === 'invalid_type'
                    ? 'Business City must be string'
                    : undefined
              }).min(2, { error: 'Business City must be at least 2 characters' }),
            colSpan: 3
        },
        businessState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Business State is required'
                        : issue.code === 'invalid_type'
                        ? 'Business State must be string'
                        : undefined
                }).min(2, { error: 'Business State must be at least 2 characters' }),
            colSpan: 3
        },
        businessPincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Business Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Business Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit business pincode' }),
            colSpan: 3
        },
        businessCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Business"
            },
            options: [],
            getOptions: () => USED_CAR_LOAN_COUNTRIES,
            validation: z.enum(USED_CAR_LOAN_COUNTRIES, { error: 'Business Country is required' }),
            colSpan: 3
        },
        companyName: {
            label: "Company Name",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Company Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Company Name must be string'
                    : undefined
              }).min(2, { error: 'Company Name must be at least 2 characters' }),
            colSpan: 6
        },
        jobYears: {
            label: "Years in Job",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Years in Job is required'
                : issue.code === 'invalid_type'
                ? 'Years in Job must be a number'
                : undefined
            }).min(1, { error: 'Years in Job must be at least 1 year' })
        },
        monthlyIncome: {
            label: "Monthly Income",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service";
            },
            validation: z.coerce.number({
                error: issue =>
                    issue.input === undefined
                ? 'Monthly Income is required'
                : issue.code === "invalid_type"
                ? 'Monthly Income must be a number'
                : undefined
            }).min(1000, { error: 'Monthly Income must be at least ₹1000' })
        },
        officeAddress: {
            label: "Office Address",
            inputType: "textField",
            maxLength: 200,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Office address is required'
                    : issue.code === 'invalid_type'
                    ? 'Office address must be string'
                    : undefined
              }).min(5, { error: 'Office address must be at least 5 characters' })
              .max(200, "Office address must be less than 200 characters"),
            colSpan:12
        },
        officeCity: {
            label: "City",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Office City is required'
                    : issue.code === 'invalid_type'
                    ? 'Office City must be string'
                    : undefined
              }).min(2, { error: 'Office City must be at least 2 characters' }),
            colSpan: 3
        },
        officeState: {
            label: "State",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                        ? 'Office State is required'
                        : issue.code === 'invalid_type'
                        ? 'Office State must be string'
                        : undefined
                }).min(2, { error: 'Office State must be at least 2 characters' }),
            colSpan: 3
        },
        officePincode: {
            label: "Pincode",
            inputType: "text",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                ? 'Office Pincode is required'
                : issue.code === 'invalid_type'
                ? 'Office Pincode must be string'
                : undefined
            }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6-digit office pincode' }),
            colSpan: 3
        },
        officeCountry: {
            label: "Country",
            inputType: "select",
            required: true,
            conditions: (formData) => {
                return formData.profession === "Service"
            },
            options: [],
            getOptions: () => USED_CAR_LOAN_COUNTRIES,
            validation: z.enum(USED_CAR_LOAN_COUNTRIES, { error: 'Office Country is required' }),
            colSpan: 3
        },
        carModel: {
            category: "CAR LOAN DETAILS",
            label: "Car Model",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Car model is required'
                    : issue.code === 'invalid_type'
                    ? 'Car model must be string'
                    : undefined
              }).min(2, { error: 'Car model must be at least 2 characters' }),
        },
        carYear: {
            label: "Car Year",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue => 
                    issue.input === undefined
                ? 'Car Year is required'
                : issue.code === 'invalid_type'
                ? 'Car Year must be a number'
                : undefined
            }).min(1880, { error: 'Car Year must be at least 1880' })
        },
        carPrice: {
            label: "Car Price (₹)",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue =>
                issue.input === undefined
                ? 'Car Price is required'
                : issue.code === "invalid_type"
                ? 'Car Price must be a number'
                : undefined
            }).min(10000, { error: 'Car price must be at least 10000' })
        },
        loanAmount: {
            label: "Loan Amount (₹)",
            inputType: "text",
            required: true,
            validation: z.coerce.number({
                error: issue =>
                issue.input === undefined
                ? "Loan Amount is required"
                : issue.code === "invalid_type"
                ? "Loan Amount must be a number"
                : undefined
            })
        },
        purpose: {
            label: "Enter purpose of the loan",
            inputType: 'textField',
            maxLength: 200,
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Purpose is required'
                    : issue.code === 'invalid_type'
                    ? 'Purpose must be string'
                    : undefined
              }).min(5, { error: 'Purpose must be at least 5 characters' })
              .max(200, "Purpose must be less than 200 characters"),
            colSpan: 12
        },
        accountHolderName: {
            category: "BANK DETAILS",
            label: "Account Holder Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                  issue.input === undefined
                    ? 'Account Holder Name is required'
                    : issue.code === 'invalid_type'
                    ? 'Account Holder Name must be string'
                    : undefined
              }).min(3, { error: 'Account Holder Name must be at least 3 characters' }),
        },
        bankName: {
            label: "Bank Name",
            inputType: 'text',
            required: true,
            validation: z.string({
                error: issue =>
                    issue.input === undefined
                ? 'Bank Name is required'
                : issue.code === 'invalid_type'
                ? 'Bank Name must be string'
                : undefined
            }).min(3, { error: 'Bank Name must be at least 3 characters' }),
        },
        accountNumber: {
            label: "Account Number",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'Account Number is required'
                : issue.code === "invalid_type"
                ? 'Account Number must be string'
                : undefined
            }).min(5, "Account Number must at least 5 digits")
        },
        ifsc: {
            label: "IFSC",
            inputType: "text",
            required: true,
            validation: z.string({
                error: issue => 
                issue.input === undefined
                ? 'IFSC is required'
                : issue.code === "invalid_type"
                ? 'IFSC must be string'
                : undefined
            }).min(5, "IFSC must at least 5 digits")
        },
        bankProof: {
            label: "Bank Statement",
            inputType: 'file',
            required: true,
            key: `loans/usedCarLoans/${formUuid}/bankProof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Bank Statement is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statement"
                : undefined
            }).min(1, {error: "Bank Statement is required"})
        },
        aadhaarFile: {
            category: "Upload Documents",
            label: "Aadhaar Card",
            inputType: 'file',
            required: true,
            key: `loans/usedCarLoans/${formUuid}/aadhaarFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Aadhaar Card is required"
                : issue.code === "invalid_type"
                ? "Invalid Aadhaar Card"
                : undefined
            }).min(1, {error: "Aadhaar Card is required"})
        },
        panFile: {
            label: "PAN Card",
            inputType: 'file',
            required: true,
            key: `loans/usedCarLoans/${formUuid}/panFile-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "PAN Card is required"
                : issue.code === "invalid_type"
                ? "Invalid PAN Card"
                : undefined
            }).min(1, {error: "PAN Card is required"})
        },
        quotations: {
            label: "Quotations",
            inputType: 'file',
            required: false,
            key: `loans/usedCarLoans/${formUuid}/quotations-${v4}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Quotations"
                : undefined
            }).optional()
        },
        // Business-specific fields
        gst: {
            label: "GST Certificate",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/gst-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "GST certificate is required"
                : issue.code === "invalid_type"
                ? "Invalid GST Certificate"
                : undefined
            }).min(1, {error: "GST certificate is required"})
        },
        msme: {
            label: "MSME/Udyam Certificate",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/msme-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "MSME Certificate is required"
                : issue.code === "invalid_type"
                ? "Invalid MSME/Udyam Certificate"
                : undefined
            }).min(1, {error: "MSME Certificate is required"})
        },
        electricityBill: {
            label: "Electricity Bill",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/electricityBill-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Electricity Bill is required"
                : issue.code === "invalid_type"
                ? "Invalid Electricity Bill"
                : undefined
            }).min(1, {error: "Electricity Bill is required"})
        },
        rentagreement: {
            label: "Rent Agreement",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.businessType === "Rented",
            key: `loans/usedCarLoans/${formUuid}/rentagreement-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Rent Agreement is required"
                : issue.code === "invalid_type"
                ? "Invalid Rent Agreement"
                : undefined
            }).min(1, {error: "Rent Agreement is required"})
        },
        cin: {
            label: "Company Identification Number (CIN)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/usedCarLoans/${formUuid}/cin-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "CIN is required"
                : issue.code === "invalid_type"
                ? "Invalid CIN"
                : undefined
            }).min(1, {error: "CIN is required"})
        },
        companypan: {
            label: "Company PAN",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/usedCarLoans/${formUuid}/companypan-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Company PAN is required"
                : issue.code === "invalid_type"
                ? "Invalid Company PAN"
                : undefined
            }).min(1, "Company PAN is required")
        },
        companytan: {
            label: "Company TAN",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Private Limited",
            key: `loans/usedCarLoans/${formUuid}/companytan-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Company TAN is required"
                : issue.code === "invalid_type"
                ? "Invalid Company TAN"
                : undefined
            }).min(1, "Company TAN is required")
        },
        tradeLicense: {
            label: "Trade License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/tradeLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Trade License"
                : undefined
            }).optional()
        },
        foodLicense: {
            label: "Food License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/foodLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Food License"
                : undefined
            }).optional()
        },
        drugLicense: {
            label: "Drug License",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/drugLicense-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Drug License"
                : undefined
            }).optional()
        },
        deedagreement: {
            label: "Partnership Deed",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business" && formData.organizationType === "Partnership",
            key: `loans/usedCarLoans/${formUuid}/deedagreement-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Partnership Deed is required"
                : issue.code === "invalid_type"
                ? "Invalid Partnership Deed"
                : undefined
            }).min(1, "Partnership Deed is required")
        },
        bankStatementsCurrent: {
            label: "1 Year Bank Statements (CA)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/bankStatementsCurrent-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "1 Year Bank Statements (CA) is required"
                : issue.code === "invalid_type"
                ? "Invalid Bank Statements"
                : undefined
            }).min(1, {error: "1 Year Bank Statements (CA) is required"})
        },
        // Service-specific fields
        incomeproof: {
            label: "Salary Slip (Last 3 Months)",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Service",
            key: `loans/usedCarLoans/${formUuid}/incomeproof-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Salary Slip is required"
                : issue.code === "invalid_type"
                ? "Invalid Salary Slip"
                : undefined
            }).min(1, "Salary Slip is required")
        },
        // ITR fields for Business
        itr1: {
            category: "ITR/Computation Documents",
            label: "ITR - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/itr1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "ITR - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 1"
                : undefined
            }).min(1, {error: "ITR - Year 1 is required"})
        },
        itr2: {
            label: "ITR - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/itr2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 2"
                : undefined
            }).optional()
        },
        itr3: {
            label: "ITR - Year 3",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/itr3-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid ITR - Year 3"
                : undefined
            }).optional()
        },
        computation1: {
            label: "Computation - Year 1",
            inputType: 'file',
            required: true,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/computation1-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? "Computation - Year 1 is required"
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 1"
                : undefined
            }).min(1, {error: "Computation - Year 1 is required"})
        },
        computation2: {
            label: "Computation - Year 2",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/computation2-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 2"
                : undefined
            }).optional()
        },
        computation3: {
            label: "Computation - Year 3",
            inputType: 'file',
            required: false,
            conditions: (formData) => formData.profession === "Business",
            key: `loans/usedCarLoans/${formUuid}/computation3-${v4()}`,
            allowedTypes: ['application/pdf'],
            unsupportedTypeMessages: "Only PDF files are supported",
            validation: z.string({
                error: issue =>
                issue.input
                ? undefined
                : issue.code === "invalid_type"
                ? "Invalid Computation - Year 3"
                : undefined
            }).optional()
        },

    })



    ///////////////////////////////////FORM FIELDS ENDS///////////////////////////////////////////

    
    return (
        <AppContext.Provider value={{
            usedCarLoanFormFields,
            setUsedCarLoanFormFields,
            refreshFormUuid
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
