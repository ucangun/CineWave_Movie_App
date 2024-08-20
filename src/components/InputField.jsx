import React from "react";

const InputField = ({ field, value, onChange }) => {
  return (
    <>
      <label htmlFor={field.id} className="label">
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.id}
        placeholder={field.placeholder}
        className="input"
        value={field.value}
        onChange={field.onChange}
      />
    </>
  );
};

export default InputField;
