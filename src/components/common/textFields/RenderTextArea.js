import React from 'react';

export const RenderTextArea = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <textarea {...input} placeholder={placeholder} type={type} />
        {touched &&
          ((error && <span>{error}</span>))}
      </div>
    </div>
  );