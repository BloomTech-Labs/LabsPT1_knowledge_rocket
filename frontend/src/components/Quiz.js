import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { get_2_Day } from "../actions";
import "../css/Quiz.css";

class Quiz extends Component {
  // state = {
  //   rocket: {},
  //   correct_answer: ""
  // };

  getRocket2D = () => {
    const className = "Reading";
    const rocketName = "TestRocket2313";
    this.props.get_2_Day(className, rocketName);
  };

  onButtonClick = () => {
    console.log('teehee')
  }
  componentWillMount() {
    this.getRocket2D();
  }

  render() {
    console.log("HERE", this.props.state);
    return (
      <Container className="recap">
        <Form>
          <Row>
            <Col>
              <FormGroup>
                {this.props.state.question ? (
                  <div>
                    <h2>{this.props.state.question.class}</h2>
                    <h2>{this.props.state.question.rocket} - Two Day Boost
                    </h2>
                    <p>{ this.props.state.question.question[0].day2ReviewText }</p>
                    <p>
                      {this.props.state.question.question[0].day2QuestionText}
                    </p>
                  </div>
                ) : null}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <h2>Question:</h2>
                { this.props.state.question ? (
                <p> { this.props.state.question.question[0].day2QuestionText }</p>): null}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup tag="fieldset">
              {this.props.state.question ? (
                <div>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> {this.props.state.question.question[0].day2AnswerA}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                        <Input type="radio" name="radio1" /> { this.props.state.question.question[0].day2AnswerB }
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                        <Input type="radio" name="radio1" /> { this.props.state.question.question[0].day2AnswerC }
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                        <Input type="radio" name="radio1" /> { this.props.state.question.question[0].day2AnswerD }
                  </Label>
                </FormGroup>
                  </div>
                ): null}
              </FormGroup>
            </Col>
          </Row>
          <Button onClick = {this.onButtonClick}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { get_2_Day }
)(Quiz);
