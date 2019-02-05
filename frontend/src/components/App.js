import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { Container, Row, Button } from "reactstrap";

import "../css/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to={"/login"}><Button className="btn">Login</Button></Link>
        <Link to={"/register"}><Button>Sign Up</Button></Link>
      </header>
        <Container>
          <Row>
            <h1>Knowledge Rocket</h1>
          </Row>
          <Row>
            <div id="moon"></div>
            <div className="fa-stack">
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
            </div>
            {/* rocket close */}
            <section className="animation-container">
              <div>
                <div class="first-text">A tool for Teachers</div>
                <div class="second-text">Promotes effective learning</div>
                <div class="third-text">(:</div>
                <div class="fourth-text">Through virtual online quizzes</div>
              </div>
            </section>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(App);