import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, Input, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css";
import "../css/Settings.css";

import { updatePassword } from '../actions';
import { updateEmail } from '../actions';

class Settings extends Component {
  state = {
    newPassword: "",
    newEmail: "",
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePasswordSubmit = e => {
    e.preventDefault();
    this.props.updatePassword( this.state.newPassword ); 
    this.setState({ newPassword: ''})
  };

  handleEmailSubmit = e => {
    e.preventDefault();
    this.props.updateEmail({ newEmail: this.state.newEmail  }); 
    this.setState({ newEmail: ''})
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
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <a href="/">Home</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Settings</BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                    <FormGroup>
                      <Input
        
                        type="newPassword"
                        name="newPassword"
                        id="current_password"
                        placeholder="Type new password here"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />

                    </FormGroup>
                    <Button style={{ margin: 0, marginTop: 20, transform: .5 }}color="info" onClick={this.handlePasswordSubmit}>
                      Update
                    </Button>
                  </Form>
                  <Form>
                    <FormGroup>
                      
                      <Input
                        type="newEmail"
                        name="newEmail"
                        id="newEmail"
                        placeholder="Type new email here"
                        value={this.state.newEmail}
                        onChange={this.handleInputChange}
                      />

                      </FormGroup>
                      <Button style={{ margin: 0, marginTop: 20, transform: .5 }}color="info" onClick={this.handleEmailSubmit}>
                      Update
                    </Button>
                    </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      state: state,
  }
}

export default connect(mapStateToProps, { updatePassword, updateEmail })( Settings );

