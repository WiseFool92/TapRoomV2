import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.css';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Tap Name' /><br /><hr />
        <input
          type = 'text'
          name = 'brand'
          placeholder = 'Tap Brand' /><br /><hr />
        <input
          type = 'number'
          name = 'price'
          placeholder = 'Tap Price' /><br /><hr />
        <input
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'Proof' /><br /><hr />
        <input
          type = 'number'
          name = 'pints'
          placeholder = 'Number of Pints available' /><br /><hr />
        <Button class = "btn" type = 'submit'>{props.buttonText}</Button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;