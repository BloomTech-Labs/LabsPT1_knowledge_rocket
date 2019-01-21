import React, { Component } from "react";

import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import SidebarNav from "./SidebarNav";
import "../css/SidebarNav.css";
import "../css/CreateRocket.css";

class CreateRocket extends Component {
  state = {
    name: '',

    day2ReviewText: '',
    day2Question: '',
    day2Answer1: '',
    day2Answer2: '',
    day2Answer3: '',
    day2Answer4: '',
    day2SelectedAnswer: '',


    week2ReviewText: '',
    week2Question: '',
    week2Answer1: '',
    week2Answer2: '',
    week2Answer3: '',
    week2Answer4: '',
    week2SelecedAnswer: '',

    month2ReviewText: '',
    month2Question: '',
    month2Answer1: '',
    month2Answer2: '',
    month2Answer3: '',
    month2Answer4: '',
    month2SelectedAnswer: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleRadioSelect = e => {
    // console.log(e.target.id);
    this.setState({ [e.target.name]: this.state[e.target.id] })
    console.log(this.state);
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
                    <Label for="day2ReviewText">Two Days - Review Text</Label>
                    <Input
                      type="text"
                      name="day2ReviewText"
                      id="d2ReviewText"
                      placeholder="Enter Day 2 Review Text: "
                      value={this.state.day2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2Question">Two Days - Question</Label>
                    <Input
                      type="text"
                      name="day2Question"
                      id="d2Question"
                      placeholder="Enter Day 2 Question: "
                      value={this.state.day2Question}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input type="radio"
                        id="day2Answer1"
                        name="day2SelectedAnswer"
                        value={this.state.day2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="day2Answer1"
                          id="d2answer1"
                          value={this.state.day2Answer1}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="day2Answer2"
                        name="day2SelectedAnswer"
                        value={this.state.day2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                    <Input
                          type="text"
                          name="day2Answer2"
                          id="d2answer2"
                          value={this.state.day2Answer2}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="day2Answer3"
                        name="day2SelectedAnswer"
                        value={this.state.day2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                    <Input
                          type="text"
                          name="day2Answer3"
                          id="d2answer3"
                          value={this.state.day2Answer3}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="day2Answer4"
                        name="day2SelectedAnswer"
                        value={this.state.day2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                    <Input
                          type="text"
                          name="day2Answer4"
                          id="d2answer4"
                          value={this.state.day2Answer4}
                          onChange={this.handleInputChange}
                        /></Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="week2ReviewText">Two Weeks - Review Text</Label>
                    <Input
                      type="text"
                      name="week2ReviewText"
                      id="w2ReviewText"
                      placeholder="Enter Week 2 Review Text: "
                      value={this.state.week2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="week2Question">Two Weeks - Question</Label>
                    <Input
                      type="text"
                      name="week2Question"
                      id="w2Question"
                      placeholder="Enter Week 2 Question: " 
                      value={this.state.week2Question}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input type="radio"
                        id="week2Answer1"
                        name="week2SelectedAnswer"
                        value={this.state.week2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="week2Answer1"
                          id="w2answer1"
                          value={this.state.week2Answer1}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="week2Answer2"
                        name="week2SelectedAnswer"
                        value={this.state.week2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                    <Input
                          type="text"
                          name="week2Answer2"
                          id="w2answer2"
                          value={this.state.week2Answer2}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="week2Answer3"
                        name="week2SelectedAnswer"
                        value={this.state.week2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                    <Input
                          type="text"
                          name="week2Answer3"
                          id="w2answer3"
                          value={this.state.week2Answer3}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="week2Answer4"
                        name="week2SelectedAnswer"
                        value={this.state.week2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                    <Input
                          type="text"
                          name="week2Answer4"
                          id="w2answer4"
                          value={this.state.week2Answer4}
                          onChange={this.handleInputChange}
                        /></Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="month2ReviewText">Two Months - Review Text</Label>
                    <Input
                      type="text"
                      name="month2ReviewText"
                      id="m2ReviewText"
                      placeholder="Enter Month 2 Review Text: "
                      value={this.state.month2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="month2Question">Two Months - Question</Label>
                    <Input
                      type="text"
                      name="month2Question"
                      id="m2Question"
                      placeholder="Enter Month 2 Question: "
                      value={this.state.month2Question}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input type="radio"
                        id="month2Answer1"
                        name="month2SelectedAnswer"
                        value={this.state.month2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="month2Answer1"
                          id="m2answer1"
                          value={this.state.month2Answer1}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="month2Answer2"
                        name="month2SelectedAnswer"
                        value={this.state.month2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                    <Input
                          type="text"
                          name="month2Answer2"
                          id="m2answer2"
                          value={this.state.month2Answer2}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="month2Answer3"
                        name="month2SelectedAnswer"
                        value={this.state.month2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                    <Input
                          type="text"
                          name="month2Answer3"
                          id="m2answer3"
                          value={this.state.month2Answer3}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input type="radio"
                        id="month2Answer4"
                        name="month2SelectedAnswer"
                        value={this.state.month2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                    <Input
                          type="text"
                          name="month2Answer4"
                          id="m2answer4"
                          value={this.state.day2Answer4}
                          onChange={this.handleInputChange}
                        /></Label>
                    </div>
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
