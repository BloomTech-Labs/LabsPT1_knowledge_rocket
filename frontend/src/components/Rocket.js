import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, Button, Badge, CardTitle, CardText } from "reactstrap";
import { connect } from "react-redux";
import add_icon from "../img/add_icon.png";
import "../css/Classes.css";

import SidebarNav from "./SidebarNav.js";
import { logoutUser, getRockets } from "../actions";

// const dummyRockets = [{ rocketName: "CSS Basics", classesAssigned: 40 }];

class Rocket extends Component {
  handleRocket = () => {
    const token = localStorage.getItem("token");
    this.props.getRockets(token);
  };

  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  };

  editClick = e => {
    alert("This will go to an edit page");
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
                <Breadcrumb>
                  <BreadcrumbItem active>Rockets</BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="/">Logout</a>
                  </BreadcrumbItem>
                </Breadcrumb>
                {/* </div> */}
              </Col>
            </Row> {/*end of breadcrumbs */}
            <Row>
              <Col>
                <Button onClick={this.handleRocket}>Click for Rockets</Button>
                <div>
                  {this.props.state.rockets ? (
                    this.props.state.rockets[0].map(unit => (
                      <Col md="4" sm="6" xs="12" className="mb-4">
                        <Card body>
                          <CardTitle className="text-center">
                            {unit.className}
                          </CardTitle>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <p>Hi</p>
                  )}
                  </div>
                </Col>
            </Row>
             <Row>
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
