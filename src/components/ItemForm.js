import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { REQUIRED, FIELD_LENGTH, INVALID, DIGITS } from './errors/errMessages';
import ImageDrawer from './ImageDrawer';
import ReduxFormDropzone from './common/ReduxFormDropzone';
import { RenderField } from './common/textFields/RenderField';
import { RenderTextArea } from './common/textFields/RenderTextArea';
import { RenderFieldArray } from './common/textFields/RenderFieldArray';

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

const ItemForm = props => {
    const { handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="dishName"
            type="text"
            component={RenderField}
            label="Dish Name"
          />
        </div>
        <div>
          <label htmlFor="prepareTime">Prepare Time</label>
          <Field
            name="prepareTime"
            component={RenderField}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="cookTime">Cook Time</label>
          <Field
            name="cookTime"
            component={RenderField}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="totalTime">Total Time</label>
          <Field
            name="totalTime"
            component={RenderField}
            type="text"
          />
        </div>
        <div>
          <Field
            name="ingredient"
            type="text"
            component={RenderField}
            label="Ingredients"
            placeholder='ingredient'
          />
          <FieldArray
            name='ingredients'
            component={RenderFieldArray}
          />
        </div>
        <div>
          <div>
            <Field
              name="instructions"
              component={RenderTextArea}
              label="Instructions"
              />
          </div>
        </div>
        <div>
          <div>
          <Field
            name="img"
            component={ReduxFormDropzone}
            dropzoneOnDrop={this.handleDrop}
          />
          </div>
          <ImageDrawer
            handleCanvas={this.handleCanvasUrl}
          />
        </div>
        <button type="submit">Add receipe</button>
      </form>
    )
  }

export default reduxForm({
  form: 'ItemForm',
  validate
})(ItemForm)