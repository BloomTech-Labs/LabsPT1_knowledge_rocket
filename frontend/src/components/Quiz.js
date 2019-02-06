import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { get_2_Day } from "../actions";
import "../css/Quiz.css";

class Quiz extends Component {
  state = {
    selectedAnser: "",
    correctAnswer: ""
  }
  getRocket2D = () => {
    const className = "Reading";
    const rocketName = "TestRocket2313";
    this.props.get_2_Day(className, rocketName);
    this.setState({correctAnswer: this.props.state.question})
  };
  handleRadioSelect = e => {
    this.setState({ selectedAnser : e.target.value });
  }
  onButtonClick = () => {
    console.log('teehee')
  }
  componentWillMount() {
    this.getRocket2D();
  }

  render() {
    console.log("STATE", this.state);
    console.log("PROPS", this.props.state);
    return (
      <Container className="recap">
        <Form>
          <Row>
            <Col>
              <FormGroup>
                {this.props.state.question ? (
                  <div>
                    <h2>{this.props.state.question.class}</h2>
                    <h2>
                      {this.props.state.question.rocket} - Two Day Boost
                    </h2>
                    <p>
                      {this.props.state.question.question[0].day2ReviewText}
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
                {this.props.state.question ? (
                  <p>
                    {" "}
                    {this.props.state.question.question[0].day2QuestionText}
                  </p>
                ) : null}
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
                        <Input
                          type="radio"
                          name="radio1"
                          value="day2AnswerA"
                          onChange={this.handleRadioSelect}
                        />{" "}
                        {this.props.state.question.question[0].day2AnswerA}
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="day2AnswerB"
                          onChange={this.handleRadioSelect}
                        />{" "}
                        {this.props.state.question.question[0].day2AnswerB}
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="day2AnswerC"
                          onChange={this.handleRadioSelect}
                        />{" "}
                        {this.props.state.question.question[0].day2AnswerC}
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          value="day2AnswerD"
                          onChange={this.handleRadioSelect}
                        />{" "}
                        {this.props.state.question.question[0].day2AnswerD}
                      </Label>
                    </FormGroup>
                  </div>
                ) : null}
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={this.onButtonClick}>Submit</Button>
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
