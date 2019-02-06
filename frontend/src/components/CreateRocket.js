import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

import SidebarNav from "./SidebarNav";
import { createRocket } from '../actions';
import Textarea from './Textarea.js';

import "../css/SidebarNav.css";
import "../css/CreateRocket.css";

class CreateRocket extends Component {
  state = {
    rocketName: '',
    className:'',

    day2QuestionName: '',
    day2ReviewText: '',
    day2QuestionText: '',
    day2AnswerA: '',
    day2AnswerB: '',
    day2AnswerC: '',
    day2AnswerD: '',
    day2CorrectAnswer: '2dAA',

    week2QuestionName: '',
    week2ReviewText: '',
    week2QuestionText: '',
    week2AnswerA: '',
    week2AnswerB: '',
    week2AnswerC: '',
    week2AnswerD: '',
    week2CorrectAnswer: '2wAA',

    month2QuestionName: '',
    month2ReviewText: '',
    month2QuestionText: '',
    month2AnswerA: '',
    month2AnswerB: '',
    month2AnswerC: '',
    month2AnswerD: '',
    month2CorrectAnswer: '2mAA',
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  handleSubmit = e => {
    e.preventDefault();

    this.props.createRocket(this.state)

  }

  handleRadioSelect = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <Container className="container" >
        <Row>
          <Col sm="md" lg="3">
            <SidebarNav />
          </Col>
          <Col lg="9">
            <Row>
              <Col>
                <Row>
                  <Col>
                    {/* </div> */ }
                  </Col>
                </Row>
                <Form className="f">
                  <FormGroup className="fg">
                    {/* <h3> all fields must be filled out</h3> */}
                    <Input
                      type="text"
                      name="rocketName"
                      placeholder="Rocket Name"
                      id="questionName"
                      maxLength="95"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <div className="rocketDesc">
                    Knowledge rockets are short paragraphs followed by a multiple choice question.  
                    These are automatically sent two days, two weeks, and two months after a lesson 
                    is taught and are intended to cause the student to recall what they have learned.
                    The rockets should not be used to provide an exhaustive review.
                    Instead, they ask the student to "reload" the mental maps they acquired during the lesson.
                    </div>
                    <br></br>
                    <Label for="day2ReviewText">
                      Two Days - Review Text
                    </Label>
                    <Textarea
                      className="Textarea"
                      countLimit="512"
                      maxLength="512"
                      name="className"
                      id="className"
                      placeholder="This is a short section of text that describes or reminds about one part of the topic. 
                      It is not intended to be a complete review of the material, 
                      just a reminder of the most important parts. 
                      This section is limited to 512 characters. "
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Label for="day2QuestionName" id="question">Two Days - Question</Label>
                    <Input
                      type="text"
                      name="day2QuestionName"
                      placeholder="Day 2 - Question Name"
                      id="questionName"
                      maxLength="95"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Textarea
                      className="Textarea"
                      countLimit="512"
                      maxLength="512"
                      name="day2QuestionName"
                      id="d2QuestionName"
                      placeholder="This is a multiple choice question related to the topic. 
                      Again the goal is not to be exhaustive, just to call the material to mind.  
                      A good question will not simply call for the recollection of information, 
                      but will require the application of knowledge."
                      value={this.state.day2QuestionName}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  {/* <h3> Select Radio button for correct answer, limit 1 per question</h3> */}
                  {/* <h3> To make only one selectable at a time, we simply give them the same name </h3> */}
                  <FormGroup className="answerChoices">
                    <div className="answer">
                      <Input type="radio"
                        id="day2AnswerA"
                        name="day2CorrectAnswer"
                        value={"day2AnswerA"}
                        checked={this.state.day2CorrectAnswer === "day2AnswerA"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="day2AnswerA"
                          id="d2answerA"
                          maxLength="45"
                          value={this.state.day2AnswerA}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        id="day2AnswerB"
                        name="day2CorrectAnswer"
                        value={"day2AnswerB"}
                        checked={this.state.day2CorrectAnswer === "day2AnswerB"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                        <Input
                          type="text"
                          name="day2AnswerB"
                          id="d2answerB"
                          maxLength="45"
                          value={this.state.day2AnswerB}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        name="day2CorrectAnswer"
                        id="day2AnswerC"
                        value={"day2AnswerC"}
                        checked={this.state.day2CorrectAnswer === "day2AnswerC"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="day2AnswerC"
                          id="d2answerC"
                          maxLength="45"
                          value={this.state.day2AnswerC}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                      <Input 
                        type="radio"
                        name="day2CorrectAnswer"
                        id="day2AnswerD"
                        value={"day2AnswerD"}
                        checked={this.state.day2CorrectAnswer === "day2AnswerD"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                       <Input
                          type="text"
                          name="day2AnswerD"
                          id="d2answerD"
                          maxLength="45"
                          value={this.state.day2AnswerD}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="fg">
                  <Label for="week2ReviewText">Two Weeks - Review Text</Label>
                    <Textarea
                      className="Textarea"
                      countLimit="512"
                      maxLength="512"
                      name="week2ReviewText"
                      id="w2ReviewText"
                      placeholder="This is a short section of text that describes or reminds about one part of the topic. 
                      It is not intended to be a complete review of the material, 
                      just a reminder of the most important parts. 
                      This section is limited to 512 characters."
                      value={this.state.week2ReviewText}
                      onChange={this.handleInputChange}
                    />
                  <Label for="week2QuestionText" id="question">Two Weeks - Question</Label>
                  <Input
                      type="text"
                      name="week2QuestionName"
                      placeholder="Week 2 - Question Name"
                      id="questionName"
                      maxLength="95"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Textarea
                      className="Textarea"
                      countLimit="512"
                      maxLength="512"
                      name="week2QuestionText"
                      id="w2QuestionText"
                      placeholder="This is a multiple choice question related to the topic. 
                      Again the goal is not to be exhaustive, just to call the material to mind.  
                      A good question will not simply call for the recollection of information, 
                      but will require the application of knowledge."
                      value={this.state.week2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="week2CorrectAnswer"
                        id="week2AnswerA"
                        value={"week2AnswerA"}
                        checked={this.state.week2CorrectAnswer === "week2AnswerA"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="week2AnswerA"
                          id="w2answerA"
                          maxLength="45"
                          value={this.state.week2AnswerA}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="week2CorrectAnswer"
                        id="week2AnswerB"
                        value={"week2AnswerB"}
                        checked={this.state.week2CorrectAnswer === "week2AnswerB"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                        <Input
                          type="text"
                          name="week2AnswerB"
                          id="w2answerB"
                          maxLength="45"
                          value={this.state.week2AnswerB}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="week2CorrectAnswer"
                        id="week2AnswerC"
                        value={"week2AnswerC"}
                        checked={this.state.week2CorrectAnswer === "week2AnswerC"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="week2AnswerC"
                          id="w2answerC"
                          maxLength="45"
                          value={this.state.week2AnswerC}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="week2CorrectAnswer"
                        id="week2AnswerD"
                        value={"week2AnswerD"}
                        checked={this.state.week2CorrectAnswer === "week2AnswerD"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                        <Input
                          type="text"
                          name="week2AnswerD"
                          id="w2answerD"
                          maxLength="45"
                          value={this.state.week2AnswerD}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="fg">
                    <Label for="month2ReviewText" id="question">Two Months - Review Text</Label>
                    <Textarea
                      className="Textarea"
                      countLimit="512"
                      maxLength="512"
                      name="month2ReviewText"
                      id="m2ReviewText"
                      placeholder="This is a short section of text that describes or reminds about one part of the topic. 
                      It is not intended to be a complete review of the material, 
                      just a reminder of the most important parts. 
                      This section is limited to 512 characters."
                      value={this.state.month2ReviewText}
                      onChange={this.handleInputChange}
                    />
                    <Label for="month2QuestionText" id="question">Two Months - Question</Label>
                    <Input
                      type="text"
                      name="month2QuestionName"
                      placeholder="Month 2 - Question Name"
                      id="questionName"
                      maxLength="95"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <Textarea
                      className="Textarea"
                      countLimit="512"
                      maxLength="512"
                      name="month2QuestionText"
                      id="m2QuestionText"
                      placeholder="This is a multiple choice question related to the topic. 
                      Again the goal is not to be exhaustive, just to call the material to mind.  
                      A good question will not simply call for the recollection of information, 
                      but will require the application of knowledge."
                      value={this.state.month2QuestionText}
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup className="answerChoices">
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="month2CorrectAnswer"
                        id="month2AnswerA"
                        value={"month2AnswerA"}
                        checked={this.state.month2CorrectAnswer === "month2AnswerA"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a1">Answer 1
                        <Input
                          type="text"
                          name="month2AnswerA"
                          id="m2answerA"
                          maxLength="45"
                          value={this.state.month2AnswerA}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="month2CorrectAnswer"
                        id="month2AnswerB"
                        value={"month2AnswerB"}
                        checked={this.state.month2CorrectAnswer === "month2AnswerB"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a2">Answer 2
                        <Input
                          type="text"
                          name="month2AnswerB"
                          id="m2answerB"
                          maxLength="45"
                          value={this.state.month2AnswerB}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="month2CorrectAnswer"
                        id="month2AnswerC"
                        value={"month2AnswerC"}
                        checked={this.state.month2CorrectAnswer === "month2AnswerC"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a3">Answer 3
                        <Input
                          type="text"
                          name="month2AnswerC"
                          id="m2answerC"
                          maxLength="45"
                          value={this.state.month2AnswerC}
                          onChange={this.handleInputChange}
                        />
                      </Label>
                    </div>
                    <div className="answer">
                    <Input 
                        type="radio"
                        name="month2CorrectAnswer"
                        id="month2AnswerD"
                        value={"month2AnswerD"}
                        checked={this.state.month2CorrectAnswer === "month2AnswerD"}
                        onChange={this.handleRadioSelect}
                      />
                      <Label for="a4">Answer 4
                        <Input
                          type="text"
                          name="month2AnswerD"
                          id="m2answerD"
                          maxLength="45"
                          value={this.state.month2AnswerD}
                          onChange={this.handleInputChange}
                        /></Label>
                    </div>
                    <Button className="rkt-btn" color="info" onClick={this.handleSubmit}>
                    Create Rocket!
                    </Button>
                  </FormGroup>
                </Form>
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



