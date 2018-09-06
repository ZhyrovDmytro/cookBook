import React from 'react';

export const RenderField = ({
    input,
    label,
    type,
    className,
    placeholder,
    meta: { touched, error },
    val
  }) => (
    <div className="input">
      <label className="input__label">{label}</label>
      <div>
        <input
          {...input}
          className={`input__field ${className}`}
          placeholder={placeholder}
          type={type} />
          {touched &&
            (error && (
              <p className="input__error">{error}</p>
            ))}
      </div>
    </div>
  );