import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewTapForm(props) {
  return (
    <>
      <ReusableForm
      formSubmissionHandler = {handleNewTapFormSubmission}
      buttonText = {"Create Tap"} />
    </>
  );

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
      id: v4()
    })
  }
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default NewTapForm;

