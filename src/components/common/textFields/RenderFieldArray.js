import React from 'react';
import { Field } from 'redux-form';
import { RenderField } from './RenderField';

export const RenderFieldArray = ({ fields, meta: { error } }) => (
    <div className="field-array">
      <button
        type="button"
        onClick={() => fields.push()}
        className="btn field-array__btn"
      >
        Add Ingredient
      </button>
      <ul className="list">
        {fields.map((ingredients, index) => (
          <li key={index} className="field-array__item">
            <Field
              name={ingredients}
              type="text"
              component={RenderField}
              label={`Ingridient #${index + 2}`}
              className="field-array__input"
            />
            <button
              type="button"
              className="btn field-array__btn-delete"
              title="Remove Hobby"
              onClick={() => fields.remove(index)}
            >
              Delete ingridient
            </ button>
          </li>
        ))}
        {error && <p className="input__error">{error}</p>}
      </ul>
    </div>
  )