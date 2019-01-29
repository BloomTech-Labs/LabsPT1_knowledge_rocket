import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

import { getUser } from '../actions';



import "../css/login.css";


class GetUser extends Component {

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.props.state.userKey)
        const token = localStorage.getItem('token')
        this.props.getUser(token);

    }

    render() {
        return(
            <div>
                <h1>GetUser</h1>
                <Button color='info' onClick={this.handleSubmit}>Login!</Button>
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

export default connect(mapStateToProps, { getUser })( GetUser );