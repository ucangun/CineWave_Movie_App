import React from "react";

const InputField = ({ field }) => {
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
      />
    </>
  );
};

export default InputField;
