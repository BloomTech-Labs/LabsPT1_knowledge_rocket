import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, Button, Badge, CardTitle, CardText, CardDeck } from 'reactstrap';
import { connect } from 'react-redux';
import add_icon from '../img/add_icon.png';
import "../css/Classes.css";

import SidebarNav from "./SidebarNav.js";
import { logoutUser } from '../actions';

const dummyClasses = [{ "class_name": "CSPT1", "students": 11, "participation": 75, "rockets_sent": 8 }, { "class_name": "CSPT2", "students": 11, "participation": 75, "rockets_sent": 8 }]


class Classes extends Component {

    // componentDidMount() {

  // }

  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    return <Container className="container">
        <Row>
          <Col sm="md" lg="3">
            <SidebarNav />
          </Col>
          <Col>
            <Row>
              <Col>
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <a href="/">Logout</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Classes</BreadcrumbItem>
                  </Breadcrumb>
                {/* </div> */}
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Welcome!</h1>
                <Row> 
                    {dummyClasses.map((unit) => (
                        <Col md="4" sm="6" xs="12" className="mb-4">
                            <Card body>
                                <CardTitle className="text-center">{unit.class_name}</CardTitle>
                                <CardText className="text-left">Students: {unit.students}</CardText>
                                <CardText className="text-left">Participation: {unit.participation}</CardText>
                                <CardText className="text-left">Rockets Sent: {unit.rockets_sent}</CardText>
                            </Card>
                        </Col>
                        ))}
                    <Col md="4" sm="6" xs="12" className="mb-4">
                        <Card body>
                            <CardTitle className="text-center">New Rocket</CardTitle>
                            <Link to={"/createRocket"}><Button className="p-0"  style={{"border": 0, "border-radius": 0}}>
                                <Badge href="#" color="light" className="p-0 b-0" style={{"border-radius": 0, "top": 0}}>
                                    <img className="card-img" src={add_icon} alt="Add Class" />
                                </Badge>
                              </Button>
                            </Link>
                        </Card>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>;
  }

}

const mapStateToProps = (state) => {
  return {
      state: state,
  }
}

export default connect(mapStateToProps, { logoutUser })( Classes );