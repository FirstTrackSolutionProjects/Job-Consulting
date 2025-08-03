import { z } from "zod";

// Enums (unique to Education Loan)
const EducationLoanTitleEnum = z.enum(['Mr', 'Mrs', 'Miss', 'Dr'], { error: 'Title is required' });
const EducationLoanGenderEnum = z.enum(['Male', 'Female'], { error: 'Gender is required' });
const EducationLoanMaritalStatusEnum = z.enum(['Unmarried', 'Married', 'Single'], { error: 'Marital status is required' });
const EducationLoanStdCodeEnum = z.enum(['+91'], { error: 'STD code is required' });
const EducationLoanAltStdCodeEnum = z.enum(['+91', '+1', '+44'], { error: 'STD code is required' });
const EducationLoanGuardianStdCodeEnum = z.enum(['+91', '+1', '+44', '+61'], { error: 'STD code is required' });
const EducationLoanCountryEnum = z.enum(['India'], { error: 'Country is required' });
const EducationLoanResidenceEnum = z.enum(['Own', 'Rented'], { error: 'Residence type is required' });
const EducationLoanOrganizationTypeEnum = z.enum(['Proprietor', 'Partnership', 'Private Limited', 'Other'], { error: 'Organization type is required' });
const EducationLoanBusinessTypeEnum = z.enum(['Own', 'Rented'], { error: 'Business type is required' });
const EducationLoanServiceTypeEnum = z.enum(['Private Job', 'Government Job', 'Other'], { error: 'Service type is required' });
const EducationLoanGuardianRelationEnum = z.enum(['Father', 'Mother', 'Brother', 'Sister'], { error: 'Guardian relation is required' });
const EducationLoanGuardianOccupationEnum = z.enum(['Business', 'Service', 'Other'], { error: 'Guardian occupation is required' });
const EducationLoanOccupationDescriptionEnum = z.enum(['Homemaker', 'Farmer', 'Self-employed', 'Freelancer', 'Retired', 'Other'], { error: 'Occupation description is required' });
const EducationLoanHighestQualificationEnum = z.enum(['12th', 'Graduate', 'Post Graduate'], { error: 'Highest qualification is required' });
const EducationLoanPurposeEnum = z.enum(['Education'], { error: 'Purpose is required' });

const educationLoanSchema = z.object({
  title: EducationLoanTitleEnum,
  fullName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Full name is required'
        : issue.code === 'invalid_type'
        ? 'Full name must be string'
        : undefined
  }).min(3, { error: 'Full name must be at least 3 characters' }),
  email: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Email is required'
        : issue.code === 'invalid_type'
        ? 'Email must be string'
        : undefined
  }).email({ error: 'Invalid email address' }),
  phone: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Phone number is required'
        : issue.code === 'invalid_type'
        ? 'Phone must be string'
        : undefined
  }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10‑digit Indian mobile number' }),
  stdCode: EducationLoanStdCodeEnum,
  altStdCode: EducationLoanAltStdCodeEnum,
  altPhone: z.string({
    error: issue =>
      issue.input === undefined
        ? undefined
        : issue.code === 'invalid_type'
        ? 'Alternate phone must be string'
        : undefined
  }).optional(),
  dob: z.string({
    error: issue =>
      issue.input === undefined
        ? 'DOB is required'
        : issue.code === 'invalid_type'
        ? 'DOB must be string'
        : undefined
  }).regex(/^\d{4}-\d{2}-\d{2}$/, { error: 'DOB must be in yyyy-mm-dd format' }),
  gender: EducationLoanGenderEnum,
  maritalStatus: EducationLoanMaritalStatusEnum,
  spouseName: z.string({
    error: issue =>
      issue.input === undefined
        ? undefined
        : issue.code === 'invalid_type'
        ? 'Spouse name must be string'
        : undefined
  }).optional(),
  childrenCount: z.string({
    error: issue =>
      issue.input === undefined
        ? undefined
        : issue.code === 'invalid_type'
        ? 'Children count must be string'
        : undefined
  }).optional(),
  fatherName: z.string({
    error: issue =>
      issue.input === undefined
        ? "Father's name is required"
        : issue.code === 'invalid_type'
        ? "Father's name must be string"
        : undefined
  }).min(3, { error: "Father's name must be at least 3 characters" }),
  motherName: z.string({
    error: issue =>
      issue.input === undefined
        ? "Mother's name is required"
        : issue.code === 'invalid_type'
        ? "Mother's name must be string"
        : undefined
  }).min(3, { error: "Mother's name must be at least 3 characters" }),
  residence: EducationLoanResidenceEnum,
  landmark: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Landmark must be string' : undefined }).optional(),
  country: EducationLoanCountryEnum,
  state: z.string({
    error: issue =>
      issue.input === undefined
        ? "State is required"
        : issue.code === 'invalid_type'
        ? "State must be string"
        : undefined
  }).min(3, { error: "State must be at least 3 characters" }),
  city: z.string({
    error: issue =>
      issue.input === undefined
        ? "City is required"
        : issue.code === 'invalid_type'
        ? "City must be string"
        : undefined
  }).min(3, { error: "City must be at least 3 characters" }),
  pincode: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Pincode is required'
        : issue.code === 'invalid_type'
        ? 'Pincode must be string'
        : undefined
  }).regex(/^[1-9][0-9]{5}$/, { error: 'Enter a valid 6‑digit Indian pincode' }),
  permanentAddress: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Permanent address is required'
        : issue.code === 'invalid_type'
        ? 'Permanent address must be string'
        : undefined
  }).min(5, { error: 'Permanent address must be at least 5 characters' }),
  presentAddress: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Present address is required'
        : issue.code === 'invalid_type'
        ? 'Present address must be string'
        : undefined
  }).min(5, { error: 'Present address must be at least 5 characters' }),
  aadhaar: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Aadhaar is required'
        : issue.code === 'invalid_type'
        ? 'Aadhaar must be string'
        : undefined
  }).regex(/^\d{12}$/, { error: 'Aadhaar must be 12 digits' }),
  pan: z.string({
    error: issue =>
      issue.input === undefined
        ? 'PAN is required'
        : issue.code === 'invalid_type'
        ? 'PAN must be string'
        : undefined
  }).regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, { error: 'Invalid PAN format' }),
  studentName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Student name is required'
        : issue.code === 'invalid_type'
        ? 'Student name must be string'
        : undefined
  }).min(3, { error: 'Student name must be at least 3 characters' }),
  courseName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Course name is required'
        : issue.code === 'invalid_type'
        ? 'Course name must be string'
        : undefined
  }).min(2, { error: 'Course name must be at least 2 characters' }),
  institutionName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Institution name is required'
        : issue.code === 'invalid_type'
        ? 'Institution name must be string'
        : undefined
  }).min(2, { error: 'Institution name must be at least 2 characters' }),
  duration: z.coerce.number({
    error: issue =>
      issue.input === undefined
        ? 'Duration is required'
        : issue.code === 'invalid_type'
        ? 'Duration must be a number'
        : undefined
  }).min(1, { error: 'Duration must be at least 1 year' }),
  loanAmount: z.coerce.number({
    error: issue =>
      issue.input === undefined
        ? 'Loan amount is required'
        : issue.code === 'invalid_type'
        ? 'Loan amount must be a number'
        : undefined
  }).min(1000, { error: 'Minimum loan amount is ₹1000' }),
  guardianName: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Guardian name is required'
        : issue.code === 'invalid_type'
        ? 'Guardian name must be string'
        : undefined
  }).min(3, { error: 'Guardian name must be at least 3 characters' }),
  guardianPhone: z.string({
    error: issue =>
      issue.input === undefined
        ? 'Guardian phone is required'
        : issue.code === 'invalid_type'
        ? 'Guardian phone must be string'
        : undefined
  }).regex(/^[6-9]\d{9}$/, { error: 'Enter valid 10‑digit Indian mobile number' }),
  guardianStdCode: EducationLoanGuardianStdCodeEnum,
  guardianRelation: EducationLoanGuardianRelationEnum,
  guardianOccupation: EducationLoanGuardianOccupationEnum.optional(),
  organizationType: EducationLoanOrganizationTypeEnum.optional(),
  businessType: EducationLoanBusinessTypeEnum.optional(),
  industry: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Industry must be string' : undefined }).optional(),
  businessYears: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Business years must be string' : undefined }).optional(),
  businessName: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Business name must be string' : undefined }).optional(),
  businessAddress: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Business address must be string' : undefined }).optional(),
  businessState: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Business state must be string' : undefined }).optional(),
  businessCity: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Business city must be string' : undefined }).optional(),
  businessPincode: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Business pincode must be string' : undefined }).optional(),
  businessCountry: EducationLoanCountryEnum.optional(),
  annualTurnover: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Annual turnover must be string' : undefined }).optional(),
  serviceType: EducationLoanServiceTypeEnum.optional(),
  designation: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Designation must be string' : undefined }).optional(),
  experience: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Experience must be string' : undefined }).optional(),
  monthlyIncome: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Monthly income must be string' : undefined }).optional(),
  officeAddress: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Office address must be string' : undefined }).optional(),
  officeState: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Office state must be string' : undefined }).optional(),
  officeCity: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Office city must be string' : undefined }).optional(),
  officePincode: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Office pincode must be string' : undefined }).optional(),
  officeCountry: EducationLoanCountryEnum.optional(),
  highestQualification: EducationLoanHighestQualificationEnum.optional(),
  // 12th
  twelfthStream: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? '12th stream must be string' : undefined }).optional(),
  twelfthCollege: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? '12th college must be string' : undefined }).optional(),
  twelfthUniversity: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? '12th university must be string' : undefined }).optional(),
  twelfthCertificate: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? '12th certificate must be string' : undefined }).optional(),
  twelfthMarksheet: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? '12th marksheet must be string' : undefined }).optional(),
  twelfthPercent: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? '12th percentage must be string' : undefined }).optional(),
  twelfthclcCertificate: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'CLC certificate must be string' : undefined }).optional(),
  // Graduation
  graduationStream: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Graduation stream must be string' : undefined }).optional(),
  graduationCollege: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Graduation college must be string' : undefined }).optional(),
  graduationUniversity: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Graduation university must be string' : undefined }).optional(),
  graduationCertificate: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Graduation certificate must be string' : undefined }).optional(),
  graduationCgpa: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Graduation CGPA must be string' : undefined }).optional(),
  graduationclcCertificate: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'CLC certificate must be string' : undefined }).optional(),
  // Post Graduation
  postGradStream: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Post grad stream must be string' : undefined }).optional(),
  postGradCollege: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Post grad college must be string' : undefined }).optional(),
  postGradUniversity: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Post grad university must be string' : undefined }).optional(),
  postGradCertificate: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Post grad certificate must be string' : undefined }).optional(),
  postGradCgpa: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Post grad CGPA must be string' : undefined }).optional(),
  postGradclcCertificate: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'CLC certificate must be string' : undefined }).optional(),

  guardianLoanAmount: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian loan amount must be string' : undefined }).optional(),
  occupationDescription: EducationLoanOccupationDescriptionEnum.optional(),
  accountHolderName: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Account holder name must be string' : undefined }).optional(),
  bankName: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Bank name must be string' : undefined }).optional(),
  accountNumber: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Account number must be string' : undefined }).optional(),
  ifsc: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'IFSC must be string' : undefined }).optional(),
  purpose: EducationLoanPurposeEnum.optional(),
  // All file fields (store S3 key as string)
  photoFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Photo file must be string' : undefined }).optional(),
  aadhaarFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Aadhaar file must be string' : undefined }).optional(),
  panFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'PAN file must be string' : undefined }).optional(),
  bankProof: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Bank proof must be string' : undefined }).optional(),
  salarySlipFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Salary slip file must be string' : undefined }).optional(),
  gstFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'GST file must be string' : undefined }).optional(),
  msmeFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'MSME file must be string' : undefined }).optional(),
  electricityBillFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Electricity bill file must be string' : undefined }).optional(),
  rentAgreementFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Rent agreement file must be string' : undefined }).optional(),
  companyPanFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Company PAN file must be string' : undefined }).optional(),
  companyTanFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Company TAN file must be string' : undefined }).optional(),
  cinFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'CIN file must be string' : undefined }).optional(),
  tradeLicenseFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Trade license file must be string' : undefined }).optional(),
  foodLicenseFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Food license file must be string' : undefined }).optional(),
  drugLicenseFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Drug license file must be string' : undefined }).optional(),
  bankStatementsCurrentYear1: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Bank statement (current year) must be string' : undefined }).optional(),
  deedagreementFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Deed agreement file must be string' : undefined }).optional(),
  itr1File: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'ITR 1 file must be string' : undefined }).optional(),
  itr2File: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'ITR 2 file must be string' : undefined }).optional(),
  itr3File: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'ITR 3 file must be string' : undefined }).optional(),
  computationFile1: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Computation file 1 must be string' : undefined }).optional(),
  computationFile2: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Computation file 2 must be string' : undefined }).optional(),
  computationFile3: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Computation file 3 must be string' : undefined }).optional(),
  //Guardian Bank file fields
  guardianAccountHolderName: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian account holder name must be string' : undefined }).optional(),
  guardianBankName: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian bank name must be string' : undefined }).optional(),
  guardianAccountNumber: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian account number must be string' : undefined }).optional(),
  guardianIfsc: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian IFSC must be string' : undefined }).optional(),

  // Guardian file fields
  guardianphotoFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian photo file must be string' : undefined }).optional(),
  guardianaadhaarFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian Aadhaar file must be string' : undefined }).optional(),
  guardianpanFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian PAN file must be string' : undefined }).optional(),
  guardianBankProof: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Guardian bank proof must be string' : undefined }).optional(),
  loanAmountFile: z.string({ error: issue => issue.input === undefined ? undefined : issue.code === 'invalid_type' ? 'Loan amount file must be string' : undefined }).optional(),
})
.refine(
  data => data.maritalStatus !== 'Married' || (data.spouseName?.trim() !== ''),
  { message: 'Spouse name is required for married applicants', path: ['spouseName'] }
)
.refine(
  data => data.maritalStatus !== 'Married' || (/^\d+$/.test(data.childrenCount?.trim() || '')),
  { message: 'Children count is required for married applicants', path: ['childrenCount'] }
)
.refine(
  data => data.organizationType !== 'Partnership' || (data.deedagreementFile?.trim() !== ''),
  { message: 'Partnership deed agreement is required for partnership organizations', path: ['deedagreementFile'] }
)
.refine(
  data => data.businessType !== 'Rented' || (data.rentAgreementFile?.trim() !== ''),
  { message: 'Rent agreement is required for rented business type', path: ['rentAgreementFile'] }
)
// Guardian occupation-based validations
.refine(
  data => !data.guardianRelation || data.guardianOccupation,
  { message: 'Guardian occupation is required when guardian relation is provided', path: ['guardianOccupation'] }
)
// Business-specific validations
.refine(
  data => data.guardianOccupation !== 'Business' || data.organizationType,
  { message: 'Organization type is required for business occupation', path: ['organizationType'] }
)
.refine(
  data => data.guardianOccupation !== 'Business' || data.businessType,
  { message: 'Business type is required for business occupation', path: ['businessType'] }
)
.refine(
  data => data.guardianOccupation !== 'Business' || data.industry?.trim(),
  { message: 'Industry is required for business occupation', path: ['industry'] }
)
.refine(
  data => data.guardianOccupation !== 'Business' || data.businessName?.trim(),
  { message: 'Business name is required for business occupation', path: ['businessName'] }
)
.refine(
  data => data.guardianOccupation !== 'Business' || data.businessYears?.trim(),
  { message: 'Years in business is required for business occupation', path: ['businessYears'] }
)
.refine(
  data => data.guardianOccupation !== 'Business' || data.annualTurnover?.trim(),
  { message: 'Annual turnover is required for business occupation', path: ['annualTurnover'] }
)
// Service-specific validations
.refine(
  data => data.guardianOccupation !== 'Service' || data.serviceType,
  { message: 'Service type is required for service occupation', path: ['serviceType'] }
)
.refine(
  data => data.guardianOccupation !== 'Service' || data.businessName?.trim(),
  { message: 'Company/Organization name is required for service occupation', path: ['businessName'] }
)
.refine(
  data => data.guardianOccupation !== 'Service' || data.designation?.trim(),
  { message: 'Designation is required for service occupation', path: ['designation'] }
)
.refine(
  data => data.guardianOccupation !== 'Service' || data.experience?.trim(),
  { message: 'Years in job is required for service occupation', path: ['experience'] }
)
.refine(
  data => data.guardianOccupation !== 'Service' || data.monthlyIncome?.trim(),
  { message: 'Monthly income is required for service occupation', path: ['monthlyIncome'] }
)
// Other occupation validations
.refine(
  data => data.guardianOccupation !== 'Other' || data.occupationDescription,
  { message: 'Occupation description is required for other occupation', path: ['occupationDescription'] }
)
// Highest qualification-based file validations

.refine(
  data => !['12th', 'Graduate', 'Post Graduate'].includes(data.highestQualification) ||
         (data.twelfthCertificate?.trim() && data.twelfthMarksheet?.trim() && data.twelfthPercent?.trim()),
  { message: '12th certificate, marksheet and percentage are required for 12th and above qualifications', path: ['twelfthCertificate'] }
)
.refine(
  data => !['Graduate', 'Post Graduate'].includes(data.highestQualification) ||
         (data.graduationCertificate?.trim() && data.graduationCgpa?.trim()),
  { message: 'Graduation certificate and CGPA are required for Graduate and above qualifications', path: ['graduationCertificate'] }
)
.refine(
  data => data.highestQualification !== 'Post Graduate' ||
         (data.postGradCertificate?.trim() && data.postGradCgpa?.trim()),
  { message: 'Post graduation certificate and CGPA are required for Post Graduate qualification', path: ['postGradCertificate'] }
)
export default educationLoanSchema;
