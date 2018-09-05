import React from 'react';
import { Field } from 'redux-form';
import { RenderField } from './RenderField';

export const RenderFieldArray = ({ fields, meta: { error } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>
          Add Ingredient
        </button>
      </li>
      {fields.map((ingredients, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Hobby"
            onClick={() => fields.remove(index)}
          >
            Delete ingridient
          </ button>
          <Field
            name={ingredients}
            type="text"
            component={RenderField}
            label={`Ingridient #${index + 2}`}
          />
        </li>
      ))}
      {error && <li className="error">{error}</li>}
    </ul>
  )