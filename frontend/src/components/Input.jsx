import React from "react";

const Input = ({ id, onChange, value, label, type }) => {
  return (
    <div>
      <input
        placeholder=""
        id={id}
        value={value}
        type={type}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
