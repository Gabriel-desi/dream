export default function Textfield({
  label,
  type,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="flex text-black flex-col gap-2">
      <label htmlFor={type}>{label}</label>
      <input
        className="py-5 px-7 bg-white text-black"
        type={type}
        onChange={onChange}
        value={value}
        name={type}
        id={type}
        placeholder={placeholder}
      />
    </div>
  );
}
