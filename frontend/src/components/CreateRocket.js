import React, { Component } from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css";
import "../css/Settings.css";

class CreateRocket extends Component {
  state = {
    day2Text: '',
    day2Question: '',
    week2Text: '',
    week2Question: '',
    month2Text: '',
    month2Question: ''
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
                    <BreadcrumbItem active>Create Rocket</BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <FormGroup>
                    <Label for="email">Name</Label>
                    
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Name"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />

                    <Label for="currentPassword">Two Days - Review Text</Label>
                    <Input
                      type="password"
                      name="password"
                      id="current_password"
                      placeholder="Enter review text: "
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />

                    <Label for="newPassword1">Two Days - Question</Label>
                    <Input
                      type="password"
                      name="password1"
                      id="newPassword1"
                      placeholder="Enter question: "
                      value={this.state.password1}
                      onChange={this.handleInputChange}
                    />
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                      <Input
                        type="Answer1"
                        placeholder="Answer 1"
                      />
                      <Input type="radio" name="radio2" />{' '}
                      <Input
                        type="Answer2"
                        placeholder="Answer 2"
                      />
                      <Input type="radio" name="radio3" />{' '}
                      <Input
                        type="Answer3"
                        placeholder="Answer 3"
                      />
                      <Input type="radio" name="radio4" />{' '}
                      <Input
                        type="Answer4"
                        placeholder="Answer 4"
                      />
                      
                    </Label>

                  </FormGroup>
                  <Button>Update</Button>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <FormGroup>
                    <Label for="email">Name</Label>
                    
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Name"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />

                    <Label for="currentPassword">Two Weeks - Review Text</Label>
                    <Input
                      type="password"
                      name="password"
                      id="current_password"
                      placeholder="Enter review text: "
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />

                    <Label for="newPassword1">Two Weeks - Question</Label>
                    <Input
                      type="password"
                      name="password1"
                      id="newPassword1"
                      placeholder="Enter question: "
                      value={this.state.password1}
                      onChange={this.handleInputChange}
                    />
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                      <Input
                        type="Answer1"
                        placeholder="Answer 1"
                      />
                      <Input type="radio" name="radio2" />{' '}
                      <Input
                        type="Answer2"
                        placeholder="Answer 2"
                      />
                      <Input type="radio" name="radio3" />{' '}
                      <Input
                        type="Answer3"
                        placeholder="Answer 3"
                      />
                      <Input type="radio" name="radio4" />{' '}
                      <Input
                        type="Answer4"
                        placeholder="Answer 4"
                      />
                      
                    </Label>

                  </FormGroup>
                  <Button>Update</Button>
                </Form>
                <Row>
              <Col>
                <Form>
                  <FormGroup>
                    <Label for="email">Name</Label>
                    
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Name"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />

                    <Label for="currentPassword">Two Months - Review Text</Label>
                    <Input
                      type="password"
                      name="password"
                      id="current_password"
                      placeholder="Enter review text: "
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />

                    <Label for="newPassword1">Two Months - Question</Label>
                    <Input
                      type="password"
                      name="password1"
                      id="newPassword1"
                      placeholder="Enter question: "
                      value={this.state.password1}
                      onChange={this.handleInputChange}
                    />
                    <Label check>
                      <Input type="radio" name="radio1" />{' '}
                      <Input
                        type="Answer1"
                        placeholder="Answer 1"
                      />
                      <Input type="radio" name="radio2" />{' '}
                      <Input
                        type="Answer2"
                        placeholder="Answer 2"
                      />
                      <Input type="radio" name="radio3" />{' '}
                      <Input
                        type="Answer3"
                        placeholder="Answer 3"
                      />
                      <Input type="radio" name="radio4" />{' '}
                      <Input
                        type="Answer4"
                        placeholder="Answer 4"
                      />
                      
                    </Label>

                  </FormGroup>
                  <Button>Update</Button>
                </Form>
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

export default CreateRocket;
