import React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, Label, Input } from "reactstrap";
import { Container } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css"
import "../css/Settings.css";

const Settings = () => {
  return (
    <div>
      <SidebarNav />
      
      <div className="main">
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Settings</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Container>
          <div id="setting-form">
            <Form>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="email"
              />

              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password1"
                id="examplePassword"
                placeholder="password"
              />

              <Label for="examplePassword">Confirm Password</Label>
              <Input
                type="password"
                name="password1"
                id="examplePassword"
                placeholder="password"
              />

              <Button>Update</Button>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Settings;
