import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Card, CardTitle, Input } from "reactstrap";
import { connect } from "react-redux";
import add_icon from "../img/add_icon.png";
import "../css/Classes.css";

import SidebarNav from "./SidebarNav.js";
import { getRockets } from "../actions";

class Rocket extends Component {
  state = {
    className: "CSPT1",
  };

  handleRocket = () => {
    const token = localStorage.getItem("token");
    const className = this.state
    this.props.getRockets(token, className);
  };

  componentWillMount() {
    this.handleRocket();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <Input
                  type="className"
                  name="className"
                  value={this.state.className}
                  onChange={this.handleInputChange}
                  placeholder="ClassName"
                />
            <Row>
              {this.props.state.rockets ? (
                this.props.state.rockets[0].map(unit => (
                  <Col md="4" sm="6" xs="12" className="mb-4">
                    <Card body>
                      <CardTitle className="text-center">
                        {unit.rocketName}
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
  { getRockets }
)(Rocket);
