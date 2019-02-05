import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { getClass } from "../actions/index";
import "../css/Quiz.css";

class Quiz extends Component {
  state = {
    correct_answer: ""
  };

  handleClass = () => {
    const token = localStorage.getItem("token");
    this.props.getClass(token);
  };


  componentWillMount() {
    this.handleClass();

  }

  render() {
    console.log(this.props);
    return (
      <Container className="recap">
        <Form>
          <Row>
            <Col>
              <FormGroup>
                {this.props.state.classes ? (
                  <h2>{this.props.state.classes[0][0].className}</h2>
                ) : (
                  <h2>No class name</h2>
                )}
                <h2> - Two Week Boost</h2>
                {/* rocketName */}
                {/* time frame */}
                {/* reviewText */}
                <p>
                  Recap textLorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Quisque eget semper nibh. Donec sem nunc, ultricies at
                  felis quis, facilisis cursus nisl. Praesent urna dolor,
                  rhoncus sagittis mattis ac, finibus quis ante.
                </p>
                <p>
                  Phasellus scelerisque cursus lorem, in aliquam nisi vehicula
                  vel. Vestibulum fermentum volutpat arcu, consequat elementum
                  risus elementum eu. Cras varius lorem in augue rhoncus
                  vulputate. Duis sed augue ullamcorper, facilisis tellus et,
                  porttitor ipsum.
                </p>
                <p>
                  Curabitur nec varius felis, vitae posuere neque. Donec
                  hendrerit iaculis nisi, a elementum leo ullamcorper id.
                </p>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <h2>Question:</h2>
                {/* questionText */}
                <p>
                  Curabitur nec varius felis, vitae posuere neque. Donec
                  hendrerit iaculis nisi, a elementum leo ullamcorper id.
                </p>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Answer 1
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Answer 2
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" /> Answer 3
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" /> Answer 4
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <Button>Submit</Button>
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

export default connect(mapStateToProps, {getClass})(Quiz);
