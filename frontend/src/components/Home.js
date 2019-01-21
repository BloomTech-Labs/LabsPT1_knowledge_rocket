import React, { Component } from "react";
import { Button } from "reactstrap";

import { logOut } from "../actions";

class Home extends Component {
  state = {
    
    logged_in: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: false });
    this.props.logOut(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Button color="info" onClick={this.handleSubmit}>
          Logout!
        </Button>
        <h1>Redirected!!!</h1>
      </div>
    );
  }
}

export default Home;
