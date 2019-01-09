import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/Settings.css";

const Settings = () => {
  return (
    <div>
      <Container>
        <SidebarNav />
        <Row>
          <div>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Settings</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Row>
        <button>Log Out</button>
        <Row>
          <Form className="form">
            <FormGroup>
              <Label for="exampleEmail">Email:</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="user@mail.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Current Password:</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">New Password:</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
                      <FormGroup>
                          <Label for="examplePassword">Confirm New Password:</Label>
                          <Input
                              type="password"
                              name="password"
                              id="examplePassword"
                              placeholder="password placeholder"
                          />
                      </FormGroup>
            <Button>Update</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
