import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, FormGroup } from 'reactstrap';
import { Link } from "react-router-dom";


import "../css/register.css";

import { registerUser } from '../actions';

class Register extends Component {
    state = {
        username: '',
        email:'',
        password1: '',
        password2: '',
        error: false,
        errorMsg:''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ error: false })

        if( this.state.username.length < 3 ) {
            this.setState({
                error: true,
                errorMsg: 'Username must be more than 3 characters',
            })
        } else if ( this.state.password1.length < 5) {
            this.setState({
                error: true,
                errorMsg: 'Password must be more than 5 characters',
            })
        } else if (this.state.password1 !== this.state.password2) {
            this.setState({
                error: true,
                errorMsg: 'Passwords must match',
            })
        } else {
            this.props.registerUser( this.state );
        }

        // if(this.props.state.success) {
        //     this.props.history.push('/')
        // }

        this.setState({ username: '', email: '', password1: '', password2: '' })
    }

    render() {
        return(
            <div>
                <h1>Register</h1>
                <Form>
                    <FormGroup>
                        <Input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} placeholder='Username' />
                        <Input type='email' name='email' value={this.state.email} onChange={this.handleInputChange} placeholder='Email' />
                        <Input type='password' name='password1' value={this.state.password1} onChange={this.handleInputChange} placeholder='Password' />
                        <Input type='password' name='password2' value={this.state.password2} onChange={this.handleInputChange} placeholder='Confirm Password' />
                        <Button color='info' onClick={this.handleSubmit}>Sign Up!</Button>
                    </FormGroup>
                </Form>
                <div>
                    {this.state.error ? <p>{this.state.errorMsg}</p> : null}
                </div>
                <div>
                    {this.props.state.error ? <p>{this.props.state.errorMsg}</p> : null }
                </div>
                <Link to={"/"}> Home </Link> 
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps, { registerUser })( Register );