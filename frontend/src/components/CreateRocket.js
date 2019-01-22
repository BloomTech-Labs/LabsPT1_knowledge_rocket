import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Form, Label, Input, FormGroup, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import SidebarNav from "./SidebarNav";
import { createRocket } from '../actions';

import "../css/SidebarNav.css";
import "../css/CreateRocket.css";

class CreateRocket extends Component {
  state = {
    rocketName: '',
    className:'',

    day2QuestionName: '',
    day2ReviewText: '',
    day2QuestionText: '',
    // day2Answer1: '',
    // day2Answer2: '',
    // day2Answer3: '',
    // day2Answer4: '',
    // day2SelectedAnswer: '',

    week2QuestionName: '',
    week2ReviewText: '',
    week2QuestionText: '',
    // week2Answer1: '',
    // week2Answer2: '',
    // week2Answer3: '',
    // week2Answer4: '',
    // week2SelectedAnswer: '',

    month2QuestionName: '',
    month2ReviewText: '',
    month2QuestionText: '',
    // month2Answer1: '',
    // month2Answer2: '',
    // month2Answer3: '',
    // month2Answer4: '',
    // month2SelectedAnswer: '',
  }
  

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  handleRadioSelect = e => {
    this.setState({ [e.target.name]: this.state[e.target.id] })
    console.log(this.state);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.createRocket(this.state)

    // this.setState({
    //   name: '',
  
    //   day2QuestionName: '',
    //   day2ReviewText: '',
    //   day2Question: '',
    //   day2Answer1: '',
    //   day2Answer2: '',
    //   day2Answer3: '',
    //   day2Answer4: '',
    //   day2SelectedAnswer: '',
  
    //   week2QuestionName: '',
    //   week2ReviewText: '',
    //   week2Question: '',
    //   week2Answer1: '',
    //   week2Answer2: '',
    //   week2Answer3: '',
    //   week2Answer4: '',
    //   week2SelecedAnswer: '',
  
    //   month2QuestionName: '',
    //   month2ReviewText: '',
    //   month2Question: '',
    //   month2Answer1: '',
    //   month2Answer2: '',
    //   month2Answer3: '',
    //   month2Answer4: '',
    //   month2SelectedAnswer: '',
    // });

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
                    {/* <h3> all fields must be filled out</h3> */}
                    <Label for="rocketName">Rocket Name</Label>
                    <Input
                      type="text"
                      name="rocketName"
                      id="name"
                      maxLength="95"
                      placeholder="Enter Rocket Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Label for="className">Class Name</Label>
                    <Input
                      type="text"
                      name="className"
                      id="className"
                      maxLength="95"
                      placeholder="Enter Class Name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2QuestionName">Two Days - Question Name</Label>
                    <Input
                      type="text"
                      name="day2QuestionName"
                      id="d2QuestionName"
                      maxLength="95"
                      placeholder="Enter Name for Question:"
                      value={this.state.day2QuestionName}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2ReviewText">Two Days - Review Text</Label>
                    <Input
                      type="text"
                      name="day2ReviewText"
                      id="d2ReviewText"
                      maxLength="505"
                      placeholder="Enter Day 2 Review Text: "
                      value={this.state.day2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2QuestionText">Two Days - Question</Label>
                    <Input
                      type="text"
                      name="day2QuestionText"
                      id="d2QuestionText"
                      maxLength="505"
                      placeholder="Enter Day 2 Question: "
                      value={this.state.day2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  {/* <h3> Select Radio button for correct answer, limit 1 per question</h3> */}
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
                          maxLength="45"
                          value={this.state.day2Answer1}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
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
                          maxLength="45"
                          value={this.state.day2Answer2}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        name="day2SelectedAnswer"
                        id="day2Answer3"
                        value={this.state.day2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="day2Answer3"
                          id="d2answer3"
                          maxLength="45"
                          value={this.state.day2Answer3}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        name="day2SelectedAnswer"
                        id="day2Answer4"
                        value={this.state.day2SelectedAnswer}
                        onClick={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                       <Input
                          type="text"
                          name="day2Answer4"
                          id="d2answer4"
                          maxLength="45"
                          value={this.state.day2Answer4}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                  <Label for="week2QuestionName">Two Weeks - Question Name</Label>
                  <Input
                    type="text"
                    name="week2QuestionName"
                    id="w2QuestionName"
                    maxLength="95"
                    placeholder="Enter Name for Question:"
                    value={this.state.week2QuestionName}
                    onChange={this.handleInputChange}
                  />
                  <Label for="week2ReviewText">Two Weeks - Review Text</Label>
                    <Input
                      type="text"
                      name="week2ReviewText"
                      id="w2ReviewText"
                      maxLength="505"
                      placeholder="Enter Week 2 Review Text: "
                      value={this.state.week2ReviewText}
                      onChange={this.handleInputChange}
                    />
                  <Label for="week2QuestionText">Two Weeks - Question</Label>
                    <Input
                      type="text"
                      name="week2QuestionText"
                      id="w2QuestionText"
                      maxLength="505"
                      placeholder="Enter Week 2 Question: "
                      value={this.state.week2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input 
                        type="radio"
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
                          maxLength="45"
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
                          maxLength="45"
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
                          maxLength="45"
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
                          maxLength="45"
                          value={this.state.week2Answer4}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="month2QuestionName">Two Months - Question Name</Label>
                    <Input
                      type="text"
                      name="month2QuestionName"
                      id="m2QuestionName"
                      maxLength="95"
                      placeholder="Enter Name for Question:"
                      value={this.state.month2QuestionName}
                      onChange={this.handleInputChange}
                    />
                    <Label for="month2ReviewText">Two Months - Review Text</Label>
                    <Input
                      type="text"
                      name="month2ReviewText"
                      id="m2ReviewText"
                      maxLength="505"
                      placeholder="Enter Month 2 Review Text: "
                      value={this.state.month2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="month2QuestionText">Two Months - Question</Label>
                    <Input
                      type="text"
                      name="month2QuestionText"
                      id="m2QuestionText"
                      maxLength="505"
                      placeholder="Enter Month 2 Question: "
                      value={this.state.month2QuestionText}
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
                          maxLength="45"
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
                          maxLength="45"
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
                          maxLength="45"
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
                          maxLength="45"
                          value={this.state.month2Answer4}
                          onChange={this.handleInputChange}
                        /></Label>
                    </div>
                    <Button color="info" onClick={this.handleSubmit}>
                    Create Rocket!
                    </Button>
                  </FormGroup>
                </Form>
                <Link to={"/"}> Home </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      state: state,
  }
}

export default connect(mapStateToProps,{ createRocket } )(CreateRocket);




