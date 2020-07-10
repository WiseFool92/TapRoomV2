import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.css';

function Tap(props) {
  return (
    <>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h2>{props.name}</h2><br />
        <h3>{props.brand}</h3><br />
        <h4>{props.price}</h4><br />
        <p>{props.alcoholContent}</p><br />
        <p>{props.pints}</p><br />
      </div>
      <Button class = "btn" onClick={() => props.whenPintSold({
          name: props.name,
          brand: props.brand,
          price: props.price,
          alcoholContent: props.alcoholContent,
          pints: props.pints,
          id: props.id
        })}>Sell Pint</Button>
    </>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenPintSold: PropTypes.func
}

export default Tap;