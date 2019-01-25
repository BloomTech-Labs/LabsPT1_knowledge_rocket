import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, FormGroup } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";


import "../css/login.css";

import { loginUser } from '../actions';


class Login extends Component {
    state = {
        username: '',
        password: '',
        error: false,
        errorMsg: ''
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ error: false })

        if (!this.state.username || !this.state.password) {
            this.setState({
                error: true,
                errorMsg: 'Need to provide a username and password',
            })

        } else {
            this.props.loginUser( this.state );

        }
            
        this.setState({ username: '', password: ''})
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
                <div>
                    {this.state.error ? <p>{this.state.errorMsg}</p> : null}
                </div>
                <div>
                    {this.props.state.error ? <p>{this.props.state.errorMsg}</p> : null }
                </div>
                <div>
                    {this.props.state.redirect ? ( <Redirect to="/classes" /> ): null }
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

export default connect(mapStateToProps, { loginUser })( Login );