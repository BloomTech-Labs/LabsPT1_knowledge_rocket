import React, { Component } from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css";
import "../css/Settings.css";

class Settings extends Component {
  state = {
    email: "",
    current_password: "",
    password1: "",
    password2: ""
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
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Current Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">New Password</Label>
                  <Input type="password" name="password1" id="examplePassword" placeholder="password" />
                </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Confirm Password</Label>
                <Input type="password" name="password2" id="examplePassword" placeholder="password" />
              </FormGroup>
              <Button>Update</Button>
              </Form>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>;
  }
}

export default Settings;
