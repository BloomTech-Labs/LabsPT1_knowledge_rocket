import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { get_2_Day, get_2_Week, get_2_Month, sendEmail } from "../actions";
import "../css/Quiz.css";

class Send2D extends Component {
  state = {
    className: "",
    rocketName: "",
    emailTitle: "",
    emailMessage: "",
    interval: ""
  };

  getRocket2D = () => {
    const request = {
      className: this.state.className,
      rocketName: this.state.rocketName
    };
    this.props.get_2_Day(request);
    this.setState({ interval: "quiz2d" });
  };
  getRocket2W = () => {
    const request = {
      className: this.state.className,
      rocketName: this.state.rocketName
    };
    this.props.get_2_Week(request);
    this.setState({ interval: "quiz2w" });
  };
  getRocket2M = () => {
    const request = {
      className: this.state.className,
      rocketName: this.state.rocketName
    };
    this.props.get_2_Month(request);
    this.setState({ interval: "quiz2m" });
  };
  buildAndSendEmail = () => {
    const userKey = localStorage.getItem("token");

    const request = {
      className: this.state.className,
      title: this.state.emailTitle,
      message: this.state.emailMessage,
      url: `http://127.0.0.1:3000/${this.state.interval}/${
        this.props.state.question.class
      }/${this.props.state.question.rocket}`
    };
    this.props.sendEmail(userKey, request);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("STATE", this.state);
    console.log("PROPS", this.props.state.question);
    return (
      <Container className="recap">
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="className"
                  placeholder="className"
                  id="className"
                  maxLength="95"
                  value={this.state.className}
                  onChange={this.handleInputChange}
                />
                <Input
                  type="text"
                  name="rocketName"
                  placeholder="rocketName"
                  id="rocketName"
                  maxLength="95"
                  value={this.state.rocketName}
                  onChange={this.handleInputChange}
                />
                <div className="func-btn">
                  <Button onClick={this.getRocket2D}>Get 2 Day Rocket</Button>
                  <Button onClick={this.getRocket2W}>Get 2 Week Rocket</Button>
                  <Button onClick={this.getRocket2M}>Get 2 Month Rocket</Button>
                </div>
              </FormGroup>
              <FormGroup>
                {this.props.state.question ? (
                  <div>
                    <h3>{this.props.state.question.class}</h3>
                    <h3>{this.props.state.question.rocket} - Two Day Boost</h3>
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
                <h3>Question:</h3>
                {this.props.state.question ? (
                  <p>
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
                          id="A"
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
                          id="B"
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
                          id="C"
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
                          id="D"
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
          <FormGroup>
            <Input
              type="text"
              name="emailTitle"
              placeholder="emailTitle"
              id="emailTitle"
              maxLength="95"
              value={this.state.emailTitle}
              onChange={this.handleInputChange}
            />
            <Input
              type="text"
              name="emailMessage"
              placeholder="emailMessage"
              id="emailMessage"
              maxLength="95"
              value={this.state.emailMessage}
              onChange={this.handleInputChange}
            />
            <h5>
              {" "}
              URL preview:{" "}
              {`http://127.0.0.1:3000/${this.state.interval}/${
                this.props.state.question.class
              }/${this.props.state.question.rocket}`}
            </h5>
            <div className="func-btn">
            <Button onClick={this.buildAndSendEmail}>
              Send
            </Button>
            </div>
          </FormGroup>
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
  { get_2_Day, get_2_Month, get_2_Week, sendEmail }
)(Send2D);
