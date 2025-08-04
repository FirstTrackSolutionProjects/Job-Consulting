import { z } from "zod";

const GenderEnum = z.enum(['Male', 'Female', 'Other'], { error: 'Gender is required' });
const InsuranceTypeEnum = z.enum(
  ['Health Insurance', 'Life Insurance', 'Vehicle Insurance', 'Travel Insurance', 'Other'],
  { error: 'Insurance type is required' }
);
const ResidenceEnum = z.enum(['Own', 'Rented'], { error: 'Residence type is required' });
const CountryEnum = z.enum(['India', 'Other'], { error: 'Country is required' });
const ProfessionEnum = z.enum(['Business', 'Service'], { error: 'Profession is required' });

const applyForInsuranceSchema = z.object({
  // Personal Details
  photo: z.string().min(1, "Photo is required"),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "DOB must be in yyyy-mm-dd format"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian mobile number"),
  gender: GenderEnum,

  // Address
  residence: ResidenceEnum,
  presentAddress: z.string().min(5, "Present address must be at least 5 characters").max(200),
  landmark: z.string().min(3, "Landmark must be at least 3 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  pincode: z.string().regex(/^[1-9][0-9]{5}$/, "Enter a valid 6-digit Indian pincode"),
  country: CountryEnum,

  // Insurance
  insuranceType: InsuranceTypeEnum,

  // Nominee
  nomineeName: z.string().min(3, "Nominee name must be at least 3 characters"),
  nomineeRelation: z.string().min(2, "Nominee relation must be at least 2 characters"),

  // Profession
  profession: ProfessionEnum,
  professionType: z.string().min(2, "Profession type is required"),

  // Business Fields (optional, shown if profession === 'Business')
  organizationType: z.string().optional(),
  businessType: z.string().optional(),
  industry: z.string().optional(),
  businessName: z.string().optional(),
  businessYears: z.coerce.number().optional(),
  businessannualturnover: z.coerce.number().optional(),
  businessAddress: z.string().optional(),
  businessCity: z.string().optional(),
  businessState: z.string().optional(),
  businessPincode: z.string().optional(),
  businessCountry: CountryEnum.optional(),

  // Service Fields (optional, shown if profession === 'Service')
  companyName: z.string().optional(),
  jobYears: z.coerce.number().optional(),
  monthlyIncome: z.coerce.number().optional(),
  officeAddress: z.string().optional(),
  officeCity: z.string().optional(),
  officeState: z.string().optional(),
  officePincode: z.string().optional(),
  officeCountry: CountryEnum.optional(),

  // Bank Details
  accountHolderName: z.string().min(3, "Account Holder Name must be at least 3 characters"),
  bankName: z.string().min(3, "Bank Name must be at least 3 characters"),
  accountNumber: z.string().min(5, "Account Number must at least 5 digits"),
  ifsc: z.string().min(5, "IFSC must at least 5 digits"),
  bankProof: z.string().min(1, "Bank Statement is required"),

  // Document Uploads
  aadhaarFile: z.string().min(1, "Aadhaar Card is required"),
  panFile: z.string().min(1, "PAN Card is required"),

  // ITR + Computation (Business Only)
  itr1: z.string().optional(),
  itr2: z.string().optional(),
  computation1: z.string().optional(),
  computation2: z.string().optional(),

  // Salary Slip (Service Only)
  incomeproof: z.string().optional(),
});

export default applyForInsuranceSchema;
