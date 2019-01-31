import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, Button, Badge, CardTitle, CardText } from "reactstrap";
import { connect } from "react-redux";
import add_icon from "../img/add_icon.png";
import "../css/Classes.css";

import SidebarNav from "./SidebarNav.js";
import { logoutUser, getUser, getClass } from "../actions";

// const dummyClasses = [
//   { class_name: "CSPT1", students: 11, participation: 75, rockets_sent: 8 },
//   { class_name: "CSPT2", students: 11, participation: 75, rockets_sent: 8 }
// ];

class Classes extends Component {
    handleGet = () => {
        const token = localStorage.getItem("token");
        this.props.getUser(token);
    };

    handleClass = () => {
        const token = localStorage.getItem("token");
        this.props.getClass(token);
    };

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
                                <Breadcrumb>
                                    <BreadcrumbItem active>Classes</BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <a href="/">Logout</a>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                                {/* </div> */ }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={ this.handleGet }>Click for User</Button>
                                <Button onClick={ this.handleClass }>Click for Classes</Button>
                                <div>
                                    { this.props.state.user ? (
                                        <h1 className="wel">
                                            Welcome, { this.props.state.user[0].username }!
                    </h1>
                                    ) : (
                                            <h1 className="wel">Welcome!</h1>
                                        ) }
                                </div>
                                <Row>
                                    { this.props.state.classes ? (
                                        this.props.state.classes[0].map(unit => (
                                            <Col md="4" sm="6" xs="12" className="mb-4">
                                                <Card body>
                                                    <CardTitle className="text-center">
                                                        { unit.className }
                                                    </CardTitle>
                                                </Card>
                                            </Col>
                                        ))
                                    ) : (
                                            <p>Hi</p>
                                        ) }
                                </Row>
                                {/* {this.props.state.classes.map(unit => (
                    <Col md="4" sm="6" xs="12" className="mb-4">
                      <Card body>
                        <CardTitle className="text-center">
                          {unit.className}
                        </CardTitle>
                        <CardText className="text-left">
                          Students: {unit.students}
                        </CardText>
                        <CardText className="text-left">
                          Participation: {unit.participation}
                        </CardText>
                        <CardText className="text-left">
                          Rockets Sent: {unit.rockets_sent}
                        </CardText> 
                      </Card>
                    </Col>
                  ))} */}
                                <Row>
                                    <Col md="4" sm="6" xs="12" className="mb-4">
                                        <Card body>
                                            <CardTitle className="text-center">New Class</CardTitle>
                                            <Link to={ "/createClass" }>
                                                <Badge
                                                    href="#"
                                                    color="light"
                                                    className="p-0 b-0"
                                                    style={ { "border-radius": 0, top: 0 } }
                                                >
                                                    <img
                                                        className="card-img"
                                                        src={ add_icon }
                                                        alt="Add Class"
                                                    />
                                                </Badge>
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
    { logoutUser, getUser, getClass }
)(Classes);