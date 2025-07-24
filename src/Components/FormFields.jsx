
export const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
  </div>
);

export const FileField = ({ label, name, onChange }) => (
  <div className="mb-4">
    <label className="block font-medium mb-1">{label}</label>
    <input
      type="file"
      name={name}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
  </div>
);



