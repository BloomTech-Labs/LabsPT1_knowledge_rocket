import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from 'react-redux';

import { logoutUser } from '../actions';

class Home extends Component {
 
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  };

  render() {
    console.log('STATE', this.state)
    return (
      <div>
        <Button color="info" onClick={this.handleLogout}>
          Logout!
        </Button>
        <h1>Redirected!!!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      state: state,
  }
}

export default connect(mapStateToProps, { logoutUser })( Home );