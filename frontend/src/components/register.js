import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, FormGroup } from 'reactstrap';

import { registerUser } from '../actions';

class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.registerUser( this.state );
        this.setState({ username: '', password: '', password2: '' })
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Input type='text' name='username' value={this.state.username} onChange={this.handleInputChange} placeholder='Username' />
                        <Input type='text' name='password' value={this.state.password} onChange={this.handleInputChange} placeholder='Password' />
                        <Input type='text' name='password2' value={this.state.password2} onChange={this.handleInputChange} placeholder='Confirm Password' />
                        <Button color='info' onClick={this.handleSubmit}>Sign Up!</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default connect(null, { registerUser })( Register );