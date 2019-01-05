import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, FormGroup } from 'reactstrap';

import "../css/login.css";

import { loginUser } from '../actions';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.loginUser( this.state );
        this.setState({ username: '', password: ''})
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <Form>
                    <FormGroup>
                        <Input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} placeholder='Username' />
                        <Input type='password' name='password' value={this.state.password} onChange={this.handleInputChange} placeholder='Password' />
                        <Button color='info' onClick={this.handleSubmit}>Login!</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default connect(null, { loginUser })( Login );