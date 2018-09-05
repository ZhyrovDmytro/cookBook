import React from 'react';

export const RenderField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error },
    val
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error && <span>{error}</span>))}
      </div>
    </div>
  );