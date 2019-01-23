import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import "../css/App.css";

import { Container, Row } from "reactstrap";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <div id="links">
              <Link to={ "/register" }>Sign Up</Link>
              <Link to={ "/login" }>Login</Link>
              <Link to={ "/getUser" }>GetUser</Link>
              <Link to={ "/billing" }>Billing</Link>
              <Link to={ "/createRocket" }>Create Rocket</Link>
            </div>
          </Row>
          <Row>
            <h1>Knowledge Rocket</h1>
          </Row>
          <Row>
            <span className="fa-stack fa-5x">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-rocket fa-stack-1x" />
            </span>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
