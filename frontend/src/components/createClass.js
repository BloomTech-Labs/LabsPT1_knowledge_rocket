import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Label, CardBody, Input, 
         FormGroup, Container, Row, Col, Card,
         Badge, CardTitle, CardText, FormText, Alert } from "reactstrap";

import SidebarNav from "./SidebarNav";

import "../css/CreateClass.css";

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
        rockets: [],
        studentDetailsError: ""
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleAddStudent = (e) => {
        e.preventDefault();
        if (this.state.studentLastName === "" || 
            this.state.studentFirstName === "" || 
            this.state.studentEmail === "") {
                this.setState({"studentDetailsError": "All fields are required."})
                return;
        } 
        const students = this.state.students;
        students.push({
                       lastName: this.state.studentLastName,
                       firstName: this.state.studentFirstName,
                       email: this.state.studentEmail
                    })
        this.setState({ students, studentFirstName: "", studentLastName: "", studentEmail:"",
                        studentDetailsError: "" })
    }

    

    render() {
        return (
            // <Container>
                <Row>
                    <Col lg="3">
                        <SidebarNav />
                    </Col>
                    <Col lg="9">
                        <Row>
                            <Form>
                                <FormGroup>
                                    <h3>Settings</h3>
                                    <Row>
                                        <Col lg="10">
                                            <Input
                                            type="text" 
                                            name="className" 
                                            id="name" 
                                            maxLength="50"
                                            placeholder="Class Name"
                                            value={this.state.className}
                                            onChange={this.handleChange}
                                            />
                                        </Col>
                                        <Col lg="1" className="form-checkbox">
                                            {' '}
                                        </Col>
                                        <Col lg="1" className="form-checkbox">
                                            <Input type="checkbox" />
                                        </Col>
                                        
                                    </Row>
                                </FormGroup>
                            </Form>
                            <Form onSubmit={this.handleAddStudent}>
                                <FormGroup>
                                    <h3>Add Students</h3>
                                    { this.state.studentDetailsError !== "" &&
                                        <Row className="student-alert">
                                            <Alert color="danger">
                                                { this.state.studentDetailsError }
                                            </Alert>
                                        </Row>
                                        }
                                    <Row>
                                        <Col>
                                            <Input
                                                type="text" 
                                                name="studentLastName" 
                                                id="lastname" 
                                                maxLength="50"
                                                placeholder="Last Name"
                                                value={this.state.studentLastName}
                                                onChange={this.handleChange}
                                                />
                                              <FormText style={{"text-align": "left" }}>*required.</FormText>  
                                        </Col>
                                        <Col>
                                            <Input
                                                type="text" 
                                                name="studentFirstName" 
                                                id="firstname" 
                                                maxLength="50"
                                                placeholder="First Name"
                                                value={this.state.studentFirstName}
                                                onChange={this.handleChange}
                                                />
                                                <FormText style={{"text-align": "left" }}>*required.</FormText>
                                        </Col>
                                        <Col>
                                            <Input
                                                type="text" 
                                                name="studentEmail" 
                                                id="email" 
                                                maxLength="50"
                                                placeholder="Email"
                                                value={this.state.studentEmail}
                                                onChange={this.handleChange}
                                                />
                                                <FormText style={{"text-align": "left" }}>*required.</FormText>
                                        </Col>
                                        <Col>
                                            <Button>Add</Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                            <Form>
                                <h3>Students</h3>
                                <Row>
                                    {this.state.students.map((student, id) => {                                
                                        // console.log(student);  
                                        return (
                                            <Col md="4" sm="6" xs="12" className="mb-4" key={id}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle className="close-button">
                                                    <Button close />
                                                </CardTitle>
                                                <CardText className="text-center">
                                                    {student.lastName} {' '} {student.firstName}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    )})}
                                </Row>
                            </Form>
                            <Form>
                                <h3>Knowledge Rockets</h3>
                                <Row>
                                    {dummyRockets.map((unit, id) => (
                                        <Col md="4" sm="6" xs="12" className="mb-4" key={id}>
                                        <Card>
                                            <CardBody>
                                                <CardTitle className="text-center">{unit.rocket_name}</CardTitle>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    ))}
                                </Row>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            // </Container>
        )
    }
}

export default CreateClass;