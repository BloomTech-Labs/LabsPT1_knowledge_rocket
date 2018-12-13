import React, { Component } from "react";
import "./App.css";
import { Container, Row } from "reactstrap";

class App extends Component {
  render() {
    return <div className="App">
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
        </Container>
      </div>;
  }
}

export default App;
