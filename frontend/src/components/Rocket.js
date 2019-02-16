import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Card, CardTitle, Input, Button, Form, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import "../css/Classes.css";
import SelectClass from './SelectClass.js';

import SidebarNav from "./SidebarNav.js";
import { getRockets, getRocketsByClassName, getClasses } from "../actions";

class Rocket extends Component {
  state = {
    className: this.props.history.location.state ? this.props.history.location.state.className : "",
  };

  handleRocket = () => {
    const className = this.state
    this.props.getRockets(className);
    this.setState({ className: ''})
  };

  // componentWillMount() {
  //   this.handleRocket();
  // }

  componentDidMount() {
    console.log(this.props.history.location);
    this.props.getClasses();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectClass = (clsName) => {
    this.props.history.location.state = clsName;
    this.setState({className: clsName});
    this.props.getRocketsByClassName({className: clsName});
  }

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
              <Form style={{width: "80%"}}>
                <FormGroup style={{maxWidth: "100%"}}>
                  <h3>Select Class</h3>
                  <SelectClass 
                      classes={this.props.state.classes}
                      handleSelectClass={this.handleSelectClass}
                      clsName={this.state.className}
                  />
                </FormGroup>
              </Form>
            {/* </Row>   */}
            {/* <Row> */}
              <Form style={{width: "80%"}}>
                <FormGroup style={{maxWidth: "100%"}}>
                <Row>{this.props.state.classRockets && 
                    this.props.state.classRockets.map(unit => (
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
                    ))}

                    <Col md="4" sm="6" xs="12" className="mb-4 addRocket">
                      <Card body>
                        <CardTitle className="text-center">New Rocket</CardTitle>
                        <Link to={{ pathname: "/createRocket",  state: { className: this.state.className }}}> 
                          <i className="fas fa-plus-circle" />
                        </Link>
                      </Card>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
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
  { getRockets, getRocketsByClassName, getClasses }
)(Rocket);
