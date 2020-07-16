import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.css';

function Tap(props) {
  return (
    <>
    <div class="display">
      <div class="threed">
        <Button color="info" >
          <div onClick = {() => props.whenTapClicked(props.id)}>
            <h2>{props.name}</h2><br />
            <h3>Brand: {props.brand}</h3><br />
            <h4>Price: {props.price}</h4><br />
            <p>Alcohol Content: {props.alcoholContent}</p><br />
            <p>Pints: {props.pints}</p><hr />
          </div>
        </Button>
      </div>
    </div>
      <div class="form">
        <Button color = "warning" class = "btn" onClick={() => props.whenPintSold({
            name: props.name,
            brand: props.brand,
            price: props.price,
            alcoholContent: props.alcoholContent,
            pints: props.pints,
            id: props.id
          })}>Sell Pint</Button>
      </div>
    </>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenPintSold: PropTypes.func
}

export default Tap;