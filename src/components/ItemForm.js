import React from 'react'
import PropTypes from 'prop-types';
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
          <h2 className="modal__title">Add new receipe</h2>
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
            <h3 className="modal__sub-title">Draw!</h3>
            <ImageDrawer
              handleCanvas={this.handleCanvasUrl}
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                toggleModal()
              }}
              className="btn btn--close modal__close"
              name="addReceipe"
            >
                Cancel
            </button>
            <button
              type="submit"
              className="btn btn--add modal__btn"
            >
                Add receipe
            </button>
          </form>
        </div>
      </div>
    )
  }

  ItemForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    className: PropTypes.bool.isRequired
  }

export default reduxForm({
  form: 'ItemForm'
})(ItemForm)