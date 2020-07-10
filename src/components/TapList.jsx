import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapList(props){
  return (
    <>
      {Object.values(props.tapList).map((tap) => {
      return 
      <Tap
        whenTapClicked = {props.onTapSelection}
        whenPintSold = {props.onSellPint}
        name = {tap.name}
        brand = {tap.brand}
        price = {tap.price}
        alcoholContent = {tap.alcoholContent}
        pints = {tap.pints}
        key = {tap.id}
        id = {tap.id}
      />
      })}
    </>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func,
  onSellPint: PropTypes.func
};

export default TapList;