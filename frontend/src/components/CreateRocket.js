import React, { Component } from "react";

import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css";
import "../css/CreateRocket.css";

class CreateRocket extends Component {
  state = {
    name: '',
    day2: {
      reviewText: '',
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    week2: {
      reviewText: '',
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    },
    month2: {
      reviewText: '',
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: ''
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Container className="container" >
        <Row>
          <Col sm="md" lg="3">
            <SidebarNav />
          </Col>
          <Col>
            <Row>
              <Col>
                <Form>
                  <FormGroup>

                    <Label for="name">Name</Label>

                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Rocket Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />

                    <Label>
                      Knowledge rockets are short paragraphs followed
                      by a multiple-choice question. These are automatically sent
                      two days, two weeks, and two months after a lesson is taught and are
                      intended to cause the student to recall what they have learned. The
                      rockets should not be used to provide and exhaustive review. Instead,
                      they ask the student to "reload" the mental maps they acquired during
                      the lesson.
                    </Label>

                    <Label for="day2ReviewText">Two Days - Review Text</Label>

                    <Input
                      type="text"
                      name="day2ReviewText"
                      id="d2ReviewText"
                      placeholder="Enter Day 2 Review Text: "
                      value={this.state.day2.reviewText}
                      onChange={this.handleInputChange}
                    />

                    <Label for="day2Question">Two Days - Question</Label>

                    <Input
                      type="text"
                      name="day2Question"
                      id="d2Question"
                      placeholder="Enter Day 2 Question: "
                      value={this.state.day2.question}
                      onChange={this.handleInputChange}
                    />

                    <Form className="answerChoices">
                      <div>
                        <Input type="radio" id="a1" name="a1" value="a1" />
                        <Label for="a1">Answer 1<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a2" name="a2" value="a2" />
                        <Label for="a2">Answer 2<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a3" name="a3" value="a3" />
                        <Label for="a3">Answer 3<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a4" name="a4" value="a4" />
                        <Label for="a4">Answer 4<Input /></Label>
                      </div>
                    </Form>


                    <Label for="week2ReviewText">Two Weeks - Review Text</Label>

                    <Input
                      type="text"
                      name="week2ReviewText"
                      id="w2ReviewText"
                      placeholder="Enter Week 2 Review Text: "
                      value={this.state.week2.reviewText}
                      onChange={this.handleInputChange}
                    />

                    <Label for="week2Question">Two Weeks - Question</Label>

                    <Input
                      type="text"
                      name="week2Question"
                      id="w2Question"
                      placeholder="Enter Week 2 Question: "
                      value={this.state.week2.question}
                      onChange={this.handleInputChange}
                    />

                    <Form className="answerChoices">
                      <div>
                        <Input type="radio" id="a1" name="a1" value="a1" />
                        <Label for="a1">Answer 1<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a2" name="a2" value="a2" />
                        <Label for="a2">Answer 2<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a3" name="a3" value="a3" />
                        <Label for="a3">Answer 3<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a4" name="a4" value="a4" />
                        <Label for="a4">Answer 4<Input /></Label>
                      </div>
                    </Form>

                    <Label for="month2ReviewText">Two Months - Review Text</Label>

                    <Input
                      type="text"
                      name="month2ReviewText"
                      id="m2ReviewText"
                      placeholder="Enter Month 2 Review Text: "
                      value={this.state.month2.reviewText}
                      onChange={this.handleInputChange}
                    />

                    <Label for="month2Question">Two Months - Question</Label>

                    <Input
                      type="text"
                      name="month2Question"
                      id="m2Question"
                      placeholder="Enter Month 2 Question: "
                      value={this.state.month2.question}
                      onChange={this.handleInputChange}
                    />

                    <Form className="answerChoices">
                      <div>
                        <Input type="radio" id="a1" name="a1" value="a1" />
                        <Label for="a1">Answer 1<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a2" name="a2" value="a2" />
                        <Label for="a2">Answer 2<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a3" name="a3" value="a3" />
                        <Label for="a3">Answer 3<Input /></Label>
                      </div>
                      <div>
                        <Input type="radio" id="a4" name="a4" value="a4" />
                        <Label for="a4">Answer 4<Input /></Label>
                      </div>
                    </Form>

                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CreateRocket; 