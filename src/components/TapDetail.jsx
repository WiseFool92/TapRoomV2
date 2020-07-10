import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.css';

function TapDetail(props) {
  const { tap } = props;
  return (
    <>
      <h2>Tap Details</h2><br />
      <h3>{tap.name}</h3><br />
      <h4>Brand: {tap.brand}</h4><br />
      <p>Price: {tap.price}</p><br />
      <p>Alcohol Content: {tap.alcoholContent}</p><br />
      <p>Pints Left: {tap.pints}</p><hr />
      <div class = "form">
        <Button color = "primary" class = "btn" onClick = { props.onClickingEdit }>Update</Button>
        <Button color = "danger" class = "btn" onClick = {() => props.onClickingDelete(tap.id) }>Delete</Button>
      </div>
    </>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default TapDetail;