import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { REQUIRED, FIELD_LENGTH, INVALID, DIGITS } from './errors/errMessages';
import ImageDrawer from './ImageDrawer';
import ReduxFormDropzone from './common/ReduxFormDropzone';
import { RenderField } from './common/textFields/RenderField';
import { RenderTextArea } from './common/textFields/RenderTextArea';
import { RenderFieldArray } from './common/textFields/RenderFieldArray';

const required = value => value ? undefined : REQUIRED;
const minLength  = value => value && value.length < 3 && FIELD_LENGTH;
const regexValid  = value => value && /[^a-zA-Z0-9 ]/i.test(value) && INVALID;
const digitsValidation  = value => value && /[^0-9 ]/i.test(value) && DIGITS;

const ItemForm = props => {
    const { handleSubmit, className, toggleModal } = props;

    return (
      <div className={`modal ${className}`}>
        <div className="modal__content">
          <form onSubmit={handleSubmit}>
            <Field
              name="dishName"
              type="text"
              component={RenderField}
              label="Dish Name"
              placeholder='Enter dish name'
              validate={[ required, minLength, regexValid ]}
            />
            <Field
              name="prepareTime"
              component={RenderField}
              type="text"
              label="Prepare Time"
              placeholder='Enter prepare time'
              validate={[ required, digitsValidation ]}
            />
            <Field
              name="cookTime"
              component={RenderField}
              type="text"
              label="Cook time"
              placeholder='Enter cook time'
              validate={[ required, digitsValidation ]}
            />
            <Field
              name="totalTime"
              component={RenderField}
              type="text"
              label="Total time"
              placeholder='Enter total time'
              validate={[ required, digitsValidation ]}
            />
            <Field
              name="ingredient"
              type="text"
              component={RenderField}
              label="Ingredients"
              placeholder='Enter ingredient'
              validate={[ required, regexValid ]}
            />
            <FieldArray
              name='ingredients'
              component={RenderFieldArray}
            />
              <Field
                name="instructions"
                placeholder='Enter preparing instructions'
                component={RenderTextArea}
                label="Instructions"
                validate={[ required ]}
                />
            <Field
              name="img"
              component={ReduxFormDropzone}
              dropzoneOnDrop={this.handleDrop}
            />
            <ImageDrawer
              handleCanvas={this.handleCanvasUrl}
            />
            <button
              onClick={() => {toggleModal()}}
              className="btn btn--close modal__close"
            >
                Cancel
            </button>
            <button 
              type="submit"
              className="modal__btn btn"
            >
                Add receipe
            </button>
          </form>
        </div>
      </div>
    )
  }

export default reduxForm({
  form: 'ItemForm'
})(ItemForm)