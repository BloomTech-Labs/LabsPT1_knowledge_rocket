import React, { Component } from "react";
import { connect } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

import { Link } from "react-router-dom";
import { Button, Form, Label, CardBody, Input, 
         FormGroup, Container, Row, Col, Card,
         Badge, CardTitle, FormText, Alert 
        } from "reactstrap";

import RemoveStudent from './RemoveStudent';
import SelectClass from './SelectClass';
import AddClass from './AddClass';
import DatePicker from 'react-datepicker';
import add_icon from '../img/add_icon.png';
import { getRockets, addStudent, getStudents, getClasses, 
         getRocketsByClassName, addClass, removeStudent 
       } from '../actions';


import SidebarNav from "./SidebarNav";

import "../css/CreateClass.css";


class CreateClass extends Component {
    state = {
        clsName: '',
        studentLastName: '',
        studentFirstName: '',
        studentEmail: '',
        studentDetailsError: "",
        startDate: new Date()
    }
    
    handleAddClass = (clsName) => {
        this.props.addClass({className: clsName});
        this.setState({clsName});
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    handleDateChange = (date) => {
        this.setState({
          startDate: date
        });
      }

    handleAddStudent = (e) => {
        e.preventDefault();
        if (this.state.studentLastName === "" || 
            this.state.studentFirstName === "" || 
            this.state.studentEmail === "") {
                this.setState({"studentDetailsError": "All fields are required."})
                return;
        }        
        const student = { className: this.state.clsName, 
                          studentName: `${this.state.studentFirstName} ${' '} ${this.state.studentLastName}`,
                          studentEmail: this.state.studentEmail }
        this.props.addStudent(student);
        this.setState({ studentFirstName: "", studentLastName: "", studentEmail:"",
                        studentDetailsError: "" })
    }

    handleRemoveStudent = (student) => {
        this.props.removeStudent({studentName: student.studentName,
                                  studentEmail: student.studentEmail,
                                  className: this.state.clsName});
    }

    handleSelectClass = (clsName) => {
        this.setState({clsName, 
                       studentLastName: "",
                       studentFirstName: "",
                       studentEmail: "",
                       studentDetailsError: ""
                      });
        this.props.getRocketsByClassName({className: clsName});
        this.props.getStudents({className: clsName});
    }

    componentDidMount() {
        this.props.getClasses();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg="3">
                        <SidebarNav className="create-class-sidebar"/>
                    </Col>
                    <Col lg="9">
                        <Row className="create-class-contents">
                            <Form className="create-class-form">
                                <FormGroup className="form-group-create-class">
                                    <h3 className="text-header">Select Class</h3>
                                    <Row>
                                        <Col lg="4" style={{marginRight: "5%"}}>
                                            <SelectClass 
                                                classes={this.props.state.classes}
                                                handleSelectClass={this.handleSelectClass}
                                                clsName={this.state.clsName}
                                            />
                                        </Col>
                                        <Col lg="3" style={{paddingLeft: 0}}>
                                            <AddClass handleAddClass={this.handleAddClass}/>
                                        </Col>
                                        <Col lg="5">
                                        <FormGroup check className="create-class-cc-checkbox">
                                            {/* <Label check>
                                                <Input type="checkbox" />{' '}
                                                <span>CC Me On Rocket Emails</span>
                                            </Label> */}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Form>
                            <Form onSubmit={this.handleAddStudent} className="create-class-form">
                                <FormGroup className="form-group-create-class">
                                    <h3 className="text-header">Add Student</h3>
                                    {this.state.studentDetailsError !== "" &&
                                        <Row className="create-class-alert-row">
                                            <Alert color="danger" className="create-class-alert-box">
                                                { this.state.studentDetailsError }
                                            </Alert>
                                        </Row>
                                    }
                                    <Row className="add-student-form-row">
                                        <Col lg="3">
                                            <Input className="stdnt-input"
                                                type="text" 
                                                name="studentLastName" 
                                                id="lastname" 
                                                maxLength="50"
                                                placeholder="Last Name"
                                                value={this.state.studentLastName}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {/* <FormText className="create-class-help-text" >
                                                        *required.
                                            </FormText>   */}
                                        </Col>
                                        <Col lg="3">
                                            <Input className="stdnt-input"
                                                type="text" 
                                                name="studentFirstName" 
                                                id="firstname" 
                                                maxLength="50"
                                                placeholder="First Name"
                                                value={this.state.studentFirstName}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {/* <FormText className="create-class-help-text" >
                                                        *required.
                                            </FormText> */}
                                        </Col>
                                        <Col lg="4">
                                            <Input className="stdnt-input"
                                                type="email" 
                                                name="studentEmail" 
                                                id="email" 
                                                maxLength="256"
                                                placeholder="Email"
                                                value={this.state.studentEmail}
                                                onChange={this.handleChange}
                                                required
                                            />
                                            {/* <FormText className="create-class-help-text" >
                                                        *required.
                                            </FormText> */}
                                        </Col>
                                        <Col lg="2" className="create-student-btn">
                                                <Input className="create-student-img" type="image" src={add_icon} alt="Add Class" />
                                        </Col>
                                    </Row>
                                    <hr/>
                            {/* </Form> */}
                            {/* <Form className="create-class-form"> */}
                                <h3>Students</h3>
                                    <Row className="create-class-display-students">
                                        {this.props.state.students.map((student, id) => {                                
                                            return (
                                                <RemoveStudent key={id} student={student}
                                                    handleRemoveStudent={this.handleRemoveStudent}
                                                />
                                        )})}
                                    </Row>
                                </FormGroup>
                            </Form>
                            <Form className="create-class-form">
                                <FormGroup className="form-group-create-class">
                                    <h3>Knowledge Rockets</h3>
                                    {this.props.state.classRockets && this.state.clsName && 
                                        <Row>{this.props.state.classRockets.map((rocket, id) => (
                                            <Col md="4" sm="6" xs="12" className="mb-4" key={id}>
                                            <Card style={{height: "80%"}}>
                                                <CardBody className="create-class-rocket-box">
                                                    <CardTitle className="text-center">
                                                        {rocket.rocketname}
                                                    </CardTitle>
                                                    {/* <div className="create-class-date-picker">
                                                        <DatePicker
                                                            selected={this.state.startDate}
                                                            onChange={this.handleDateChange}
                                                        />
                                                    </div> */}
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        ))}
                                        <Col md="4" sm="6" xs="12" className="mb-4">
                                            <Card style={{height: "80%"}}>
                                                <CardBody>
                                                    <CardTitle style={{marginBottom: "0"}} className="text-center">New Rocket</CardTitle>
                                                    {/* <Link to={"/createRocket"} style={{borderRadius: 0, top: 0, backgroundColor: "white", textAlign: "center"}}>
                                                            <img className="card-img p-0 b-0 m-0" src={add_icon} alt="Add Class" />
                                                    </Link> */}
                                                    <div style={{textAlign: "center"}}>
                                                        <Link to={"/createRocket"} style={{borderRadius: 0, top: 0, backgroundColor: "white", textAlign: "center"}}>
                                                                <img className="card-img p-0 b-0 m-0" src={add_icon} alt="Add Class" />
                                                        </Link>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>}
                                </FormGroup>
                            </Form>
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
  
export default connect(mapStateToProps,{ getRockets, getStudents, addStudent, 
                                        getClasses, getRocketsByClassName, 
                                        addClass, removeStudent } )(CreateClass);