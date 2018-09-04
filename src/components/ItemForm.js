import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { REQUIRED, FIELD_LENGTH, INVALID, DIGITS } from './errors/errMessages';

const validate = values => {
  const errors = {}
  if (!values.dishName) {
    errors.dishName = REQUIRED
  } else if (values.dishName.length < 3) {
    errors.dishName = FIELD_LENGTH
  } else if (/[^a-zA-Z0-9 ]/i.test(values.dishName)) {
    errors.dishName = INVALID
  }

  if (!values.totalTime) {
    errors.totalTime = REQUIRED
  } else if (isNaN(Number(values.totalTime))) {
    errors.totalTime = DIGITS
  }

  if (isNaN(Number(values.prepareTime))) {
    errors.prepareTime = DIGITS
  }

  if (isNaN(Number(values.cookTime))) {
    errors.cookTime = DIGITS
  }

  if (!values.ingredient) {
    errors.ingredient = REQUIRED
  }

  if (!values.instructions) {
    errors.instructions = REQUIRED
  }
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning, }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderTextarea = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning, }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderIngredients = ({ fields, meta: { error } }) => (
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
          component={renderField}
          label={`Ingridient #${index + 2}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

const ItemForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="dishName">Dish Name</label> */}
        <Field
          name="dishName"
          type="text"
          component={renderField}
          label="Dish Name"
        />
      </div>
      <div>
        <label htmlFor="prepareTime">Prepare Time</label>
        <Field
          name="prepareTime"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="cookTime">Cook Time</label>
        <Field
          name="cookTime"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="totalTime">Total Time</label>
        <Field
          name="totalTime"
          component={renderField}
          type="text"
        />
      </div>
      <div>
        <Field
          name="ingredient"
          type="text"
          component={renderField}
          label="Ingredients"
          placeholder='ingredient'
        />
        <FieldArray
          name='ingredients'
          component={renderIngredients}
        />
      </div>
      <div>
        <div>
          <Field
            name="instructions"
            component={renderTextarea}
            label="Instructions"
          />
        </div>
      </div>
      <button type="submit">Add receipe</button>
    </form>
  )
}

export default reduxForm({
  form: 'ItemForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(ItemForm)