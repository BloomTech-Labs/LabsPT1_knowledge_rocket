import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Card, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import add_icon from "../img/add_icon.png";
import "../css/Classes.css";

import SidebarNav from "./SidebarNav.js";
import { logoutUser, getRockets } from "../actions";

class Rocket extends Component {
  handleRocket = () => {
    const token = localStorage.getItem("token");
    this.props.getRockets(token);
  };

  componentWillMount() {
    this.handleRocket();
  }

  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    return (
      <Container className="container">
        <Row>
          <Col sm="md" lg="3">
            <SidebarNav />
          </Col>
          <Col>
          <Row>
            <Col>
            <h1>Rockets</h1>
            </Col>
          </Row>
            <Row>
              {this.props.state.rockets ? (
                this.props.state.rockets[0].map(unit => (
                  <Col md="4" sm="6" xs="12" className="mb-4">
                    <Card body>
                      <CardTitle className="text-center">
                        {unit.rocketname}
                      </CardTitle>
                      <CardTitle className="text-center">
                        { unit.className }
                      </CardTitle>
                      <Link to={"/createRocket"}>
                        <button>Edit</button>
                      </Link>
                    </Card>
                  </Col>
                ))
              ) : (
                null
              )}

              <Col md="4" sm="6" xs="12" className="mb-4 addRocket">
                <Card body>
                  <CardTitle className="text-center">New Rocket</CardTitle>
                  <Link to={"/createRocket"}>
                    <img className="card-img" src={add_icon} alt="Add Rocket" />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { logoutUser, getRockets }
)(Rocket);
