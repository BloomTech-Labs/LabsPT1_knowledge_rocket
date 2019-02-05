import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { getClass, get_2_Day } from "../actions";
import "../css/Quiz.css";

class Quiz extends Component {
  state = {
    rocket: {},
    correct_answer: ""
  };

  getRocket2D = () => {
    const className = "Reading";
    const rocketName = "TestRocket2313"
    this.props.get_2_Day(className, rocketName);
    this.setState({ rocket: '' })
  }

   componentWillMount() {
    this.getRocket2D();
  }

  render() {
    console.log(this.props);
    return (
      <Container className="recap">
      <Button onClick={this.getRocket2D}>Get Data</Button>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <h2>{this.props.className}</h2>
                <h2> {this.props.rocketName}- Two Day Boost</h2>
                {/* rocketName */}
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

export default connect(mapStateToProps, {getClass, get_2_Day})(Quiz);
