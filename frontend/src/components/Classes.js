import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Card, Badge, CardTitle } from "reactstrap";
import { connect } from "react-redux";
import add_icon from "../img/add_icon.png";
import "../css/Classes.css";

import SidebarNav from "./SidebarNav.js";
import { getUser, getClass } from "../actions";

class Classes extends Component {
  handleGet = () => {
    const token = localStorage.getItem("token");
    this.props.getUser(token);
  };

  handleClass = () => {
    const token = localStorage.getItem("token");
    this.props.getClass(token);
  };

  componentWillMount() {
    this.handleGet();
    this.handleClass();
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
                <div>
                  {this.props.state.user ? (
                    <h1 className="wel">
                      Welcome, {this.props.state.user[0].username}!
                    </h1>
                  ) : (
                    <h1>Welcome!</h1>
                  )}
                </div>
                <Row>
                  {this.props.state.classes && (
                    this.props.state.classes.map(unit => (
                      <Col md="4" sm="6" xs="12" className="mb-4">
                        <Card body>
                          <CardTitle className="text-center">
                            {unit.className}
                          </CardTitle>
                        </Card>
                      </Col>
                    ))
                  )}
                  <Col md="4" sm="6" xs="12" className="mb-4">
                    <Card body>
                      <CardTitle className="text-center">New Class</CardTitle>
                      <Link to={"/createClass"}>
                        <Badge
                          href="#"
                          color="light"
                          className="p-0 b-0"
                          style={{ "border-radius": 0, top: 0 }}
                        >
                        </Badge>
                        <img className="card-img" src={add_icon} alt="Add Class" />
                      </Link>
                    </Card>
                  </Col>
                </Row>
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
  { getUser, getClass }
)(Classes);
