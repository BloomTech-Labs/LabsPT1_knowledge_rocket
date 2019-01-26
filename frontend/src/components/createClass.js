import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Label, Input, FormGroup, Container, Row, Col, Card, Badge, CardTitle, CardText } from "reactstrap";

import SidebarNav from "./SidebarNav";

import "../css/SidebarNav.css";

const dummyRockets = [
    { "rocket_name": "CSPT1",}, 
    { "rocket_name": "CSPT2", },
]


class CreateClass extends Component {
    state = {
        className: '',
        students: [],
        studentLastName: '',
        studentFirstName: '',
        studentEmail: '',
        rockets: []
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="md" lg="3">
                        <SidebarNav />
                    </Col>
                    <Col lg="9">
                        <Row>
                            <Form style={{ width: 200}}>
                                <FormGroup>
                                <h3>Settings</h3>
                                    <Row>
                                        <Col>
                                            <Input
                                            type="text" 
                                            name="className" 
                                            id="name" 
                                            maxLength="50"
                                            placeholder="Class Name"
                                            value=""
                                            // onChange={}
                                            />
                                        </Col>
                                        <Col>
                                            <Input type="checkbox"
                                            />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                            <Form>
                            <FormGroup>
                            <h3>Add Students</h3>
                                    <Row>
                                        <Col>
                                            <Input
                                                type="text" 
                                                name="studentLastName" 
                                                id="lastname" 
                                                maxLength="50"
                                                placeholder="Last Name"
                                                value=""
                                                // onChange={}
                                                />
                                        </Col>
                                        <Col>
                                            <Input
                                                type="text" 
                                                name="studenFirsttName" 
                                                id="firstname" 
                                                maxLength="50"
                                                placeholder="First Name"
                                                value=""
                                                // onChange={}
                                                />
                                        </Col>
                                        <Col>
                                            <Input
                                                type="text" 
                                                name="studentEmail" 
                                                id="email" 
                                                maxLength="50"
                                                placeholder="Email"
                                                value=""
                                                // onChange={}
                                                />
                                        </Col>
                                        <Col>
                                            <Button color="danger">Add</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                        </Row>
                        <h3>Knwoledge Rockets</h3>
                        <Row>
                            {dummyRockets.map((unit) => (
                            <Col md="4" sm="6" xs="12" className="mb-4">
                                <Card body>
                                    <CardTitle className="text-center">{unit.rocket_name}</CardTitle>
                                </Card>
                            </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default CreateClass;