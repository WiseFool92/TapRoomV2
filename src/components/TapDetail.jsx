import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function TapDetail(props) {
  const { tap, onClickingDelete } = props;
  return (
    <>
      <h2>Tap Details</h2><br /><hr />
      <h3>{tap.name}</h3><br /><hr />
      <h4>{tap.brand}</h4><br /><hr />
      <p>{tap.price}</p><br /><hr />
      <p>{tap.alcoholContent}</p><br /><hr />
      <p>Pints Left:</p><br /><hr />
      <p>{tap.pints}</p><br /><hr />
      <Button onClick = { props.onClickingEdit }>Update</Button>
      <Button onClick = {() => props.onClickingDelete(tap.id) }>Delete</Button>
    </>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default TapDetail;