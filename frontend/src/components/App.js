import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { withRouter } from 'react-router';
import "../css/App.css";

import { Container, Row } from "reactstrap";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row className="btn-links">
            <div id="links">
              <Link to={"/register"}><Button>Sign Up</Button></Link>
              <Link to={"/login"}><Button>Login</Button></Link>
            </div>
          </Row>
          <Row>
            <h1>Knowledge Rocket</h1>
          </Row>
          <Row>
            <div id="moon"></div>
            <span className="fa-stack">
              <div class="first-text">A tool for Teachers</div>
              <div class="second-text">Promotes effective learning</div>
              <div class="third-text">(:</div>
              <div class="fourth-text">Through virtual online quizes</div>
              <div class="jc-rocket-container">
                <div class="jc-rocket">
                  <div class="jc-rocket-head">
                  </div>
                  <div class="jc-rocket-window">
                  </div>
                  <div class="jc-booster">
                  </div>
                  <div class="jc-booster-flames">
                  </div>
                </div>
              </div>
            </span>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
