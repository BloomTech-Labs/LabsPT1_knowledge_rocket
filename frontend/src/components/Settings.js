import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css";
import "../css/Settings.css";

class Settings extends Component {
  state = {
    email: "",
    password: "",
    password1: "",
    password2: ""
  };
  
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
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />

                    <Label for="currentPassword">Current Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="current_password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />

                    <Label for="newPassword1">New Password</Label>
                    <Input
                      type="password"
                      name="password1"
                      id="newPassword1"
                      placeholder="password"
                      value={this.state.password1}
                      onChange={this.handleInputChange}
                    />

                    <Label for="newPassword2">Confirm Password</Label>
                    <Input
                      type="password"
                      name="password2"
                      id="newPassword2"
                      placeholder="password"
                      value={this.state.password2}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <Button>Update</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default withRouter(Settings);

