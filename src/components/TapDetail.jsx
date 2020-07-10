import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.css';

function TapDetail(props) {
  const { tap } = props;
  return (
    <>
      <h2>Tap Details</h2><hr />
      <h3>{tap.name}</h3><hr />
      <h4>Brand: {tap.brand}</h4><hr />
      <p>Price: {tap.price}</p><hr />
      <p>Alcohol Content: {tap.alcoholContent}</p><hr />
      <p>Pints Left: {tap.pints}</p><hr />
      <Button class = "btn" onClick = { props.onClickingEdit }>Update</Button>
      <Button class = "btn" onClick = {() => props.onClickingDelete(tap.id) }>Delete</Button>
    </>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default TapDetail;