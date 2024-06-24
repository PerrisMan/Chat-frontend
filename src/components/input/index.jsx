export default function Input({ 
  placeholder, 
  type, 
  id, 
  name, 
  value,
  onChange
}) {
  return (
    <div className=" pb-4">
      <input
        className=" w-full border border-black rounded-2xl p-4 shadow-2xl"
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
