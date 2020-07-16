import React from 'react';
import '../App.css';
import { Jumbotron } from "reactstrap";

function Header() {
  return (
    <Jumbotron>
      <div className="header">
        <h1>The Green Dragon Inn</h1>
      </div>
    </Jumbotron>
  );
}

export default Header;