import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row } from "reactstrap";

import SidebarNav from "./SidebarNav";

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
          <button>Log Out</button>
        </Row>
        <Row>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
