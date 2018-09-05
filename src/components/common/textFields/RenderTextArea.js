import React from 'react';

export const RenderTextArea = ({
    input,
    label,
    type,
    className,
    placeholder,
    meta: { touched, error }
  }) => (
    <div className="text-area">
      <label className="text-area__label">{label}</label>
      <div>
        <textarea
            {...input}
            className={`text-area__field ${className}`}
            placeholder={placeholder}
            type={type} />
            {touched &&
          ((error && <p className="text-area__error">{error}</p>))}
      </div>
    </div>
  );