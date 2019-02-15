import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import { get_2_Day, get_2_Week, get_2_Month, sendEmail, getClasses, getRocketsByClassName } from "../actions";
import SelectClass  from "./SelectClass";
import SelectRocket from "./SelectRocket";
import SidebarNav from "./SidebarNav";
import "../css/Quiz.css";

class Send2D extends Component {
    state = {
        clsName: "",
        rocketName: "",
        emailTitle:"",
        emailMessage:"",
        interval: "",
        unixTimeStamp: ""
    };

    componentWillMount() {
      this.props.getClasses();

    }

    handleSelectClass = (clsName) => {
      this.setState({clsName 
       });
      this.props.getRocketsByClassName({className: clsName});
      }

    handleSelectRocket = (rocketName) => {
      this.setState({ rocketName })
    }

    getRocket2D = () => {
      const request = {
        className: this.state.clsName,
        rocketName: this.state.rocketName,
      }
      const createBatchInterval = (Date.now() + 86400*2*1000)
      this.setState({ 
        interval: 'quiz2d',
        unixTimeStamp: createBatchInterval 
      })
      this.props.get_2_Day(request);
      this.setState({ rocketName: ""})
    }

    getRocket2W = () => {
        const request = {
            className: this.state.clsName,
            rocketName: this.state.rocketName,
        }
        const createBatchInterval = (Date.now() + 604800*2*1000)
        this.setState({ 
          interval: 'quiz2w',
          unixTimeStamp: createBatchInterval 
        })
        this.props.get_2_Week(request);
        this.setState({ rocketName: ""})
    };

    getRocket2M = () => {
      const request = {
        className: this.state.clsName,
        rocketName: this.state.rocketName,
      }
      const createBatchInterval = (Date.now() + 2629743*2*1000)
      this.setState({
        interval: 'quiz2m',
        unixTimeStamp: createBatchInterval
      })
      this.props.get_2_Month(request);
      this.setState({ rocketName: ""})
    };

    buildAndSendEmail = () => {
        const userKey = localStorage.getItem('token')

        const request = {
            className: this.state.clsName,
            title: this.state.emailTitle,
            message: this.state.emailMessage,
            url:`https://infallible-euler-24eb8a.netlify.com/${this.state.interval}/${this.props.state.question.class}/${this.props.state.question.rocket}`,
            unixTimeStamp: this.state.unixTimeStamp,
            interval: this.state.interval,
            rocketName: this.state.rocketName
          }
          this.props.sendEmail(userKey, request);
    }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    render() {
        return (
          <Container className="recap">
            <Row>
            <Col lg="3">
              <SidebarNav className="create-class-sidebar"/>
            </Col>
            <Form>
              <Row>
                <Col>
                <FormGroup>
                    <h3>Select Class</h3>
                    <Row>
                      <Col>
                        <SelectClass 
                          classes={this.props.state.classes}
                          handleSelectClass={this.handleSelectClass}
                          clsName={this.state.clsName}
                        />
                      </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                  <h3>Select Rocket</h3>
                    <Row>
                      <Col>
                        <SelectRocket
                          rockets={this.props.state.classRockets}
                          handleSelectRocket={this.handleSelectRocket}
                          rocketName={this.state.rocketName}
                        />
                      </Col>
                    </Row>
                </FormGroup>
                      <Button onClick={this.getRocket2D}>Get 2 Day Rocket</Button>
                      <Button onClick={this.getRocket2W}>Get 2 Week Rocket</Button>
                      <Button onClick={this.getRocket2M}>Get 2 Month Rocket</Button>
                  <FormGroup>
                    <Input type="text" name="emailTitle" placeholder="Email Title" id="emailTitle" maxLength="95" value={this.state.emailTitle} onChange={this.handleInputChange} />
                    <Input type="text" name="emailMessage" placeholder="Email Message" id="emailMessage" maxLength="95" value={this.state.emailMessage} onChange={this.handleInputChange} />
                    <h5> URL preview: {`https://infallible-euler-24eb8a.netlify.com/${this.state.interval}/${this.props.state.question.class}/${this.props.state.question.rocket}`}</h5>
                  </FormGroup>
                    <Button onClick={this.buildAndSendEmail}>Build URL and Send Email Batch</Button>
                  <FormGroup>
                    {this.props.state.question && this.state.interval === "quiz2d" ? (
                      <div>
                        <h3>{this.props.state.question.class}</h3>
                        <h3>{this.props.state.question.rocket} - Two Day Boost</h3>
                        <p>
                          {this.props.state.question.question[0].day2ReviewText}
                        </p>
                        <p>
                          {this.props.state.question.question[0].day2QuestionText}
                        </p>
                        <h4>Answers:</h4>
                        <div>
                          <div>
                            {this.props.state.question.question[0].day2AnswerA}
                          </div>
                          <div>
                            {this.props.state.question.question[0].day2AnswerB}
                          </div>
                          <div>
                            {this.props.state.question.question[0].day2AnswerC}
                          </div>
                          <div>
                            {this.props.state.question.question[0].day2AnswerD}
                          </div>
                        </div>
                      </div>
                    ) : this.props.state.question && this.state.interval === "quiz2w" ? (
                      <div>
                        <h3>{this.props.state.question.class}</h3>
                        <h3>{this.props.state.question.rocket} - Two Week Boost</h3>
                        <p>
                          {this.props.state.question.question[0].week2ReviewText}
                        </p>
                        <p>
                          {this.props.state.question.question[0].week2QuestionText}
                        </p>
                        <h4>Answers:</h4>
                        <div>
                          <div>
                            {this.props.state.question.question[0].week2AnswerA}
                          </div>
                          <div>
                            {this.props.state.question.question[0].week2AnswerB}
                          </div>
                          <div>
                            {this.props.state.question.question[0].week2AnswerC}
                          </div>
                          <div>
                            {this.props.state.question.question[0].week2AnswerD}
                          </div>
                        </div>
                      </div>
                    ) : this.props.state.question && this.state.interval === "quiz2m" ? (
                      <div>
                        <h3>{this.props.state.question.class}</h3>
                        <h3>{this.props.state.question.rocket} - Two Month Boost</h3>
                        <p>
                          {this.props.state.question.question[0].month2ReviewText}
                        </p>
                        <p>
                          {this.props.state.question.question[0].month2QuestionText}
                        </p>
                        <h4>Answers:</h4>
                        <div>
                          <div>
                            {this.props.state.question.question[0].month2AnswerA}
                          </div>
                          <div>
                            {this.props.state.question.question[0].month2AnswerB}
                          </div>
                          <div>
                            {this.props.state.question.question[0].month2AnswerC}
                          </div>
                          <div>
                            {this.props.state.question.question[0].month2AnswerD}
                          </div>
                        </div>
                      </div>
                    ) : null
                    }
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            </Row>
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
  { get_2_Day, get_2_Month, get_2_Week, sendEmail, getClasses, getRocketsByClassName  }
)(Send2D);
