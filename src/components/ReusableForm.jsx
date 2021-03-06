import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.css';

function ReusableForm(props) {
  return (
    <>
    <div class ="form" >
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Tap Name' /><br />
        <input
          type = 'text'
          name = 'brand'
          placeholder = 'Tap Brand' /><br />
        <input
          type = 'number'
          name = 'price'
          placeholder = 'Tap Price' /><br />
        <input
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'Proof' /><br />
        <input
          type = 'number'
          name = 'pints'
          placeholder = 'Pints for sale' /><br /><hr />
        <Button color ="success" class ="btn" type ='submit'>{props.buttonText}</Button>
      </form>
    </div>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;