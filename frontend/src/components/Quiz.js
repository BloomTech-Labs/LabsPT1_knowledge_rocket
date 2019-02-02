import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { getClass } from "../actions/index";
import "../css/Quiz.css";

class Quiz extends Component {
  render() {
    console.log(this.props);
    return (
      <Container className="recap">
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <h2>CS14</h2>
                {/* className */}
                <h2>Graphs - Two Week Boost</h2>
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
              <radiogroup>
                <radio id="1" label="1" />
                <radio id="2" label="2" />
                <radio id="3" label="3" />
                <radio id="4" label="4" />
                {/* <FormGroup check>
                  <Label check>
                    <Input type="radio" /> Choice 1
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" /> Choice 2
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" /> Choice 3
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" /> Choice 4
                  </Label>
                </FormGroup> */}
              </radiogroup>
            </Col>
          </Row>
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

export default connect(mapStateToProps)(Quiz);
