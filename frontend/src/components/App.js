import React, { Component } from "react";

import "../css/App.css";

import { Container, Row } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <div id="links">
              <a href="/register">Sign Up</a>
              <a href="/login">Login</a>
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

export default App;
